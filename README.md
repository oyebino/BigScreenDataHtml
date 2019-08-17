---

---

# BigSrceenDataHtml 

>  数据大屏、数据可视化



#### 一、Vue环境部署

1.  vue安装

   ```
   npm install -g cnpm --registry=https://registry.npm.taobao.org
   
   之后可以用淘宝镜像安装
   cnpm install vue-cli -g 	#-g 等价于 --global
   ```

2.  进入目录

   ```
   cd /d  BigSrceenDataHtml
   ```

3. 安装依赖，根据package.json安装

   ```
   npm install
   ```

4. 启动项目

   ```
   npm run dev
   ```

5. 打包

   ```
   npm run build
   ```


#### 二、项目目录结构

```
index.html: 			项目根目录视图

projectProxyServer.js　　发送请求代理文件

dist: 　　　　  		  打包后文件

src: 　　　　　   		 源码文件

package.json: 　　　     依赖文件

node_modules: 　　　　    安装依赖后存放的文件
```



#### 三、vue组件包含3个内容

- 视图部分

  ```
  <template>
    <div class="hello">
      {{ msg }}
    </div>
  </template>
  ```


- 逻辑部分

```
  <script>
    export default {
      name: 'HelloWorld',
      data() {
        return {
          msg: 'Hello Vue'
        }
      }
    }
  </script>
  ```

- 样式部分

```
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
```

