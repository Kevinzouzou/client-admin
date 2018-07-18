export const ServiceType = {
  ENTER_APPLY: '入驻申请',
  PROPERTY_REPAIR: '物业报修',
  DECORATING_APPlY: '装修申请',
  DISCHARGING_APPLY: '放行申请',
  FEEDBACK: '投诉建议',
  VISITANT_APPLY: '访客申请',
  ENTERPRISE_AUTHENTICATION: '企业认证',
  SUGGESTION: '投诉建议',
  FINANCE_SERVICE: '金融服务',
  HEIGHT_END_ACTIVITY: '高端活动',
  COMMERCIAL_SERVICE: '商务服务',
  DISCOUNT: '惠通知',
  NOTIFICATION: '公告'
};

const LICENSE_PLATE_PROVINCE = [
    '京',
    '津',
    '冀',
    '晋',
    '蒙',
    '辽',
    '吉',
    '黑',
    '沪',
    '苏',
    '浙',
    '皖',
    '闽',
    '赣',
    '鲁',
    '豫',
    '鄂',
    '湘',
    '粤',
    '桂',
    '琼',
    '川',
    '贵',
    '云',
    '渝',
    '藏',
    '陕',
    '甘',
    '青',
    '宁',
    '新',
    '港',
    '澳'
];
const LICENSE_PLATE_CITY = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N'
];

export const LicensePlate = {
    Province: LICENSE_PLATE_PROVINCE,
    city: LICENSE_PLATE_CITY
};


export default{
    ServiceType,
    LicensePlate
}

