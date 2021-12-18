import { useState, useEffect, React } from "react";
import { Table, Pagination, Space, List, Modal, Input, Button } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { connect } from "react-redux";

import "./App.css";

const { Search } = Input;


const News = (props) => {
    const {
        news,
        queryNews,
        getNews,
        newsDetail
    } = props;
    const { body, properties } = newsDetail;

    const [pageNum, setPageNum] = useState(1)
    const [keyword, setKeyword] = useState('')
    const [visible, setVisible] = useState(false)



    useEffect(() => {
        queryNews({ keyword: keyword, page: pageNum, pageSize: 10 })
    }, [keyword, pageNum]);

    const getDetail = (id) => {
        getNews({ id: id });
        setVisible(true);
    }

    const IconText = ({ icon, text, id }) => (
        <Button onClick={() => { getDetail(id) }}>
            {icon}
            {text}
        </Button>
    );

    return (
        <div className="News">
            <Search placeholder="请输入关键词" onSearch={(e) => { setKeyword(e) }} enterButton />
            <List
                itemLayout="vertical"
                pagination={{
                    onChange: page => {
                        setPageNum(page)
                    },
                    pageSize: 10,
                    total: news.total,
                    showSizeChanger: false
                }}
                dataSource={news.data}
                renderItem={item => {
                    return (
                        <List.Item
                            key={item.id}
                            actions={[
                                <IconText icon={<StarOutlined />} text="详情" key="list-vertical-star-o" id={item.id} />
                            ]}
                            className="news-li"
                        >
                            {item.title}
                        </List.Item>)
                }
                }
            />
            <Modal title="新闻详情" visible={visible} width={4500} footer={null} onCancel={() => { setVisible(false) }}>
                {body && properties && (
                    <div>
                        <p>{body}</p>
                        <br />
                        <table border="1">
                            <tbody>
                                <tr>
                                    {
                                        Object.keys(properties).map((item) => (
                                            <th key={item}>{item}</th>
                                        ))
                                    }
                                </tr>
                                <tr>
                                    {
                                        Object.keys(properties).map((item) => (
                                            <td key={item}>{properties[item]}</td>
                                        ))
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </Modal>
        </div>
    )
}


export default News;