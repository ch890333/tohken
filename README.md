# Tohken Ranbu Helper
## 介绍
* Chrome插件一枚，跟著阿官更新版本。
* 目前已支援日向正宗的刀劍資料更新。
* 0.3.0.1111 移除不必要程式

## 功能
* 疲劳度查看以及疲劳演算
* 远征，损坏提醒
* 锻刀和捞刀结果预知

## 目录结构
```
src─┐
    │  manifest.json
    │
    ├─assets
    │  │  bgs.png                     # 右下角的背景
    │  │  icon.png                    # 图标
    │  │  icon_128.png                # 图标
    │  │  sakura.png                  # 樱花
    │  │  # 存放资源的目录
    │  └─sword
    |     sword_id.png                # 刀纹
    │     # 存放刀纹的目录
    ├─devtools
    │  │  devtools.html
    │  │  devtools.js
    │  │
    │  └─panel
    │      │  index.html              # 面板宿主
    │      │
    │      ├─app
    │      │      app.js              # Vue构造，主体部分
    │      │      config.js           # 默认的设置
    │      │      data.js             # 默认的数据
    │      │      define.js           # 定义静态数据
    │      │      event.js            # 休息时的疲劳计算
    │      │      inject.js           # 页面注入，负责推送通知
    │      │      log.js              # 暂无作用
    │      │      parse.js            # 解析和填充数据
    │      │      router.js           # 数据包路由
    │      │      store.js            # 储存部分的封装
    │      │      view.js             # 默认的视图数据
    │      │
    │      ├─assets
    │             base.less
    │             index.less
    │             main.less
    │             party-item.less
    │             # 样式
    └─thirdparty
            aes.js
            FileSaver.js
            jquery.js
            livereload.js
            lodash.js
            pad-nopadding-min.js
            vue.js
            # 第三方库
```
## 运行机理(本區待更新)
```coffee
  # line 35~:  /src/devtools/panel/app/app.coffee
  ready: ->
    # Listen the network request
    chrome.devtools.network.onRequestFinished.addListener (request)=>
      # filter
      tohken = request.request.url.match /http:\/\/(.*?)\.touken-ranbu\.jp\/(.*)/
      if tohken != null
        # throw static
        return if tohken[1] == "static"
        # pass
        @route(request, tohken[2])
```
利用Chrome Devtools API来监听符合条件的网络通讯并将数据传至路由组件。

解析并将处理后的数据传递至view模型中。

通过Vue.js的数据绑定机制来更新视图

## 参考资料
https://developer.chrome.com/extensions/api_index

https://lodash.com/docs

http://vuejs.org/

https://github.com/eligrey/FileSaver.js

## License
CC0 1.0 Universal
