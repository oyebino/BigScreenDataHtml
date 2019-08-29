#  BigScreenDataServer

> 大屏数据服务端

- project
  - common：存放公共类函数
  - app：后台端路由文件及主要接口方法
  - dist: 前端的页面及资源
  - downLoad： 存放临时下载文件
  - run_main.bat：项目运行文件

- vue前端+flask前后端整合
  vue在打包后会生成一个dist文件，内容如下：

  ![](.\folder_img\dist处理前.png)

  对dist文件结构进行处理如下：

  ![](.\folder_img\dist处理后.png)

  编辑index.html文件,把css和js的引入路径修改下，如下
  ![](.\folder_img\资源路径.png)
  
  最后把整个dist入进目录即可完成

- 项目运行

  双击run_main.bat即可打开服务，https://127.0.0.1:5000

