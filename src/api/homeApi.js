
import api from '../ppSwallow/ppSwallow';
export default {
  /**
   * params
   * openId  从后台来的openId
   * cellPhoneNumber  手机号
   * password    密码
   * addInfo    {"nickName":"张翠","roleId":"C23459286CFF4CE2870A4FF4C03D54A1","position":"运营","department":"运营部"}
   * 小程序注册
   */
  register: function(params) {
    return api.post('user/wxRegister', params);
  },
  /**
   * params
   * code
   * 小程序传code到后台获取openId
   */
  getCode: function(params) {
    return api.post('user/wxCodeLogin', params);
  },
  /**
   * params
   * 获取验证码
   */
  sendCode: function(params) {
    return api.post('code/sendRegisterCode', params);
  },
  /**
   * params
   * pname  惠通知，公告， 高端活动
   * 获取字典信息
   */
  getType: function(params) {
    return api.post('dict/dictList', params);
  },

  /**
   * params
   * “position”:”广告位置”,
   * “num”: 广告条数（默认返回一条）
   * 查询所有的广告列表
   */
  getAdvertiseMent: function(params) {
    return api.post('advertisement/advertisementList', params);
  },

  /**
   * params
   * token : token
   * addInfo : 用户信息
   * 修改用户信息
   */
  changeUserInfo: function(params) {
    return api.post('user/updateInfo', params);
  },
  /**
   * params
   * 上传图片
   */
  uploaImg: function (params) {
    return api.uploadFile('https://yqdndev.vpclub.cn/api2034/upload/fileNoOverwrite', params);
  },
  /**
   * params
   * token : 必填
   * 物业服务查询
   */
  getSerInfo: function(params) {
    return api.post('propertyApplication/propertyApplicationList', params);
  },
  /**
   * params
   * token : 必填
   * 添加物业服务
   */
  addSerInfo: function(params) {
    return api.post('propertyApplication/addPropertyApplication', params);
  },

  /**
   * params
   * 物业申请处理
   */
  dealPropertyApplicationt: function(params) {
    return api.post('propertyApplication/dealPropertyApplication', params);
  },
  /**
   * params
   * parkId : 园区id
   * 查询所有的通知和高端服务
   */
  queryInfo: function(params) {
    return api.post('displayContent/displayContentList', params);
  },

  /**
   * params
   * parkId : 园区id
   * 园区所属企业
   */
  queryCompany: function(params) {
    return api.post('park/queryEnterprise', params);
  },

  /**
   * params
   * “enterpriseId”: “所属企业Id”
   * 	企业员工列表
   */
  queryUsers: function(params) {
    return api.post('staff/staffList', params);
  },


  /**
   * params
   * " myType":"我的收藏",
   *  查询我的收藏，我的报名
   */
  getCollectAndSignList: function(params) {
    return api.post('displayContent/myDisplayContent', params);
  },

  /**
   * params
   * “name”:”姓名”,
   *“phone”: “手机号”
   *“enterpriseId” :”所属企业Id”,
   *“post”:”身份（企业所有者，管理员，员工）”,
   *“addInfo”:”附加信息”
   *  添加企业员工
   */
  addUser: function(params) {
    return api.post('staff/addStaff', params);
  },

  /**
   * params
   * “name”:”姓名”,
   *“phone”: “手机号”
   *“enterpriseId” :”所属企业Id”,
   *“post”:”身份（企业所有者，管理员，员工）”,
   *“addInfo”:”附加信息”
   *  修改企业员工
   */
  updateUser: function(params) {
    return api.post('staff/updateStaff', params);
  },
  /**
   * params
   * “id”:”企业员工id”
   * 删除企业员工
   */
  deleterUser: function(params) {
    return api.post('staff/deleteStaff', params);
  },

  /**
   * params
   * “type”:”类型”
   * 获取共享资源列表
   */
  shareList: function(params) {
    return api.post('sharedResource/sharedResourceList', params);
  },
  /**
   * params
   * 获取共享资源预约记录
   */
  sharedRecord: function(params) {
    return api.post('sharedResource/mySharedResource', params);
  },
  /**
   * params
   * id 资源id
   * 获取共享资源预约状态
   */
  sharedState: function(params) {
    return api.post('sharedResource/sharedResourceOccupation', params);
  },
  /**
   * params
   * id 资源id
   * 共享资源预定
   */
  appointResource: function(params) {
    return api.post('sharedResource/order', params);
  },

  /**
   * params
   * 我的商务课程
   */
  myBusinessCource: function(params) {
    return api.post('displayContent/myCommerceCourse', params);
  },
  /**
   * params
   * “startDate”:”开始日期”,
   “endDate”:”结束日期”
   * 商务课程列表
   */
  businessCourceList: function(params) {
    return api.post('displayContent/commerceCourseList', params);
  },
  /**
   * params
   * “type”:”类型”,
   “targetId”:”目标id”,
   “addInfo”:”附加信息”
   * 添加关联关系
   */
  addRelationship: function(params) {
    return api.post('targetAssociation/addTargetAssociation', params);
  },
};
