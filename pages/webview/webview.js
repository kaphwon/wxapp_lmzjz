Page({
  data: {
    // text:"这是一个页面" 
    url: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数 
    this.setData({
      url: options.page + "?type=" + options.ttt
    })
   // wx.showToast({
   //   title: options.ttt,
   //   icon: 'success',
   //   duration: 2000
   // })
  }
  

});