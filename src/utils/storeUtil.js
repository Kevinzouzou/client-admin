/**
 * 获取用户信息
 */
const getPPInfo = () => {
  let ppInfo = wx.getStorageSync('userInfo');
  return JSON.parse(ppInfo)
};
/**
 * 保存用户信息
 * @param obj 信息obj
 */
const setPPInfo = (obj) => {
  let info = JSON.stringify(obj);
  wx.setStorageSync('userInfo', info);
};


module.exports = {
  getPPInfo,
  setPPInfo
};
