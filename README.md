## 组件模块
-------------------
> 组件`ppRating`的使用方式

```
// template 布局
 <repeat for="{{repairOrderList}}" index="index" key="index" item="item">
	<ppRating
	  readOnly="true"
	  :grade.sync="item.rating"
	  :idx.sync="index"
	  @ppClick.user="currGrade">
	</ppRating>
</repeat>
```

```
 /**
  * js 文件
  */
  data = {
      repairOrderList: [
        {
          rating: 4,
       }
   }
  methods = {
      // @ppClick.user 绑定函数
      currGrade(value,index) {
        if(index<0) return; //数组中才使用index
        //更新绑定的值,同时更新UI
        this.repairOrderList[index].rating =value;
      },
    };
```



| 变量/函数      |    作用     | 默认     |
| :-------- | --------:| :--: |
| readOnly  | 是否只读 |  false (不可以点击)|
| grade.sync| 评分数 |  0  |
| idx.sync|  下标 (在循环才使用,传入数组index角标,解决复用) | -1  |
| @ppClick.user|点击星星时的处理函数(value=评分,index=数组下标)| value=0,index=-1 |

>**注** : @ppClick.user 只有在可点击状态生效(readOnly  ==true),index 也只需要在循环中复用时才有用


----------


----------


## 网络请求
-------------------

#### 简介

>网络请求 `ppSwallow`,译为`皮皮燕(皮皮艳)`,是对微信小程序原生请求的二次封装
>支持ES6的promise新特性,全局配置,拦截相关配置信息,方便接口调用,和统一管理,维护.
-------------------
####  使用说明
> `ppSwallow`的使用简单,只需要根据自身的项目的接口情况,进行相关配置就可以使用了


1. `配置:`主要是配置 `Config`文件,大佬可以在该文件中
  统一配置`baseUrl`,`token`,`header`等全局参数


| 变量/函数      |    作用
| :-------- | --------:
| Config.prototype.baseUrl  | baseURL的配置|
| Config.prototype.defaultHeader  | 默认的请求头配置 |
| Config.prototype.getRequest| Request的相关配置 |
| | token相关参数配置|
| Config.prototype.response| response响应的参数配置|
|| 接口sucess/fail的拦截|



2. `使用`: 使用只需要import `ppSwallow`对象

```
let  params ={
  name:'ppY'
}
let url ='park/info'
api.post(url, params).then((res)=>{
    //处理success
}).catch((err)=>{
   //处理err
})
```

> post(): 代表这是post请求

> `park/queryPark :即为url

> params:即为需要传入的参数

##### 格式说明

> `api.method(url,params,options)`

| 语法     |    说明     |    格式    |
| :-------- | --------:| --------:|
| api  | import `ppSwallow`对象|调用所有请求方法的对象(对象名可自取)|
| method  | `get`,`post`,`put`,`delete`,`uploadFile`|必须的function|
|   |`get`请求 |api.`get`(url,params,options)|
|   | `post`请求|api.`post`(url,params,options)|
|   | `put`请求|api.`put`(url,params,options)|
|  |`uploadFile`请求|api.`uploadFile`(url,params,options)|
| url  | 该请求的uri,`不包括BaseUrl的部分` |必须,`BaseUrl可以全局配置`|
|params| 接口的参数对象 |非必须(具体根据接口需要)|
|| 参数为`key:value`形势 |params:{key:value}|
|| 注意:当为`uploadFile`上传文件请求时 | {key:value}中`key`为文件名,`value`为文件路径|
|options| 如果全局的`config`无法满足条件,可通过options做特殊配置, |一般不用(具体根据需要)|



3.`建议` 一个模块统一用api文件用来统一管理,方便统计,维护和后期迭代,如新建:`homeApi`文件

> homeApi.js文件内容
```
import api from '../../../../ppSwallow/ppSwallow';

export default {
  /**
   * params
   * 查询所有园区
   */
  getAllGarden: function(params) {
    return api.get('park/queryPark', params);
  },

  /**
   * "contactNum": "string"
   * 发送验证码
   */
  sendCode: function (params) {
    return api.post('xxx', params);
  },

  /**
   * 上传文件
   */
  uploaImg: function (params) {
    return api.uploadFile('xxx', params);
  },
};

```
> 然后再HOME模块中,`import homeApi from homeApi` 即可
```
  /**
   *
   * @param params
   * 'ppy':为文件名
   * 'xxxx/../ppt.png':为文件路径
   */
 let params ={'ppy','xxxx/../ppt.png'}
 homeApi.uploaImg(params) .then((res)=>{
     console.log('上传成功')
 }) .catch((err)=>{
     console.log('上传失败')
 })
```
