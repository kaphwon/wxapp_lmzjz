//index.js
//获取应用实例
Page({
  hengyangshi: function (e) {
    wx.openLocation({
      latitude: 26.9035293327,
      longitude: 112.6023530960,
      scale: 28,
      name: '衡阳市辣妹子家政公司',
      address: '衡阳市船山路48号'
    })
  },
 
  xiduzhen: function (e) {
    wx.openLocation({
      latitude: 26.9748400000,
      longitude: 112.3655900000,
      scale: 28,
      name: '衡阳县辣妹子家政公司',
      address: '西渡镇越富家园'
    })
  },

  callinghys: function () {
    wx.makePhoneCall({
      phoneNumber: '07348235258',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  callinghyx: function () {
    wx.makePhoneCall({
      phoneNumber: '07346999402',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  }
})