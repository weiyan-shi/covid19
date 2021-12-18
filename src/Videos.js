import { useState, useEffect, React } from "react";
import { Table, Space, Pagination, List, Modal, Input, Button } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import "./App.css";


const { Search } = Input;



const Videos = (props) => {
    const {
        queryVideo,
        videos,
    } = props;
    const beforeURL = 'src="http://localhost:8080/getVideo?filename=';


    const [pageNum, setPageNum] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [visible, setVisible] = useState(false)
    const [URL, setURL] = useState('')


    useEffect(() => {
        queryVideo({ keyword: keyword, page: pageNum, pageSize: 10 })
    }, [keyword, pageNum]);

    const IconText = ({ icon, text, id }) => (
        <Button onClick={() => { setURL(beforeURL + encodeURIComponent(id)); setVisible(true) }}>
            {icon}
            {text}
        </Button>
    );

    return (
        <div className="Videos">
            <Search placeholder="请输入关键词" onSearch={(e) => { setKeyword(e) }} enterButton />
            <List
                itemLayout="vertical"
                pagination={{
                    onChange: page => {
                        setPageNum(page)
                    },
                    pageSize: 10,
                    total: videos.total,
                    showSizeChanger: false
                }}
                dataSource={videos.data}
                renderItem={item => (
                    <List.Item
                        key={item}
                        actions={[
                            <IconText icon={<StarOutlined />} text="详情" key="list-vertical-star-o" id={item} />
                        ]}
                        className="news-li"
                    >
                        {item}
                    </List.Item>
                )
                }
            />
            <Modal title="新闻详情" visible={visible} onCancel={() => setVisible(false)} footer={false}>
                <video controls="autoplay" src={URL} />
            </Modal>
        </div>
    )

}

export default Videos;