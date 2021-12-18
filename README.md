# Covid19疫情数据可视化前后端工程

## 后端项目启动
```bash
$ java -jar web-spring-1.0-SNAPSHOT.jar
```
启动后端服务，可以上http://127.0.0.1:3000/api/swagger-ui.html#/web_api 查看自己的接口

## 前端修改api路径
* 打开src/model.js
```bash
$ covid19\src>code  models.js
```
* 修改apiPath为接口前缀路径
```javascript
const apiPath = 'http://127.0.0.1:3000/api';
```

## 前端项目启动
* 下载node&npm(此步骤可命令行可安装包)
* 安装相关依赖
```shell
$ npm i
```
* 启动项目
```shell
$ npm start
```


* **大功告成！撒花**
