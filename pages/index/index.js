//index.js
//获取应用实例
Page({
  
  data: {
     imgUrls: [
      'https://m.0734lmz.cn/html/hdp/lmzbanner1.jpg',
     
    ],
    //幻灯片数据
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    //TAB标签数据
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
  },

  //事件处理函数
  hysbaojieyuyue: function () {
    wx.navigateTo({
      url: '../webview/webview?ttt=&page=https://m.0734lmz.cn/zhongdianbaojie.aspx'
    })
  },

  hysjujiabaomu: function () {
    wx.navigateTo({
      url: '../webview/webview?ttt=保姆&page=https://m.0734lmz.cn/jiazhengrenyuan_list.aspx'
    })
  },

  hysyuesao: function () {
    wx.navigateTo({
      url: '../webview/webview?ttt=月嫂&page=https://m.0734lmz.cn/jiazhengrenyuan_list.aspx'
    })
  },

  hysyuyingshi: function () {
    wx.navigateTo({
      url: '../webview/webview?ttt=育婴师&page=https://m.0734lmz.cn/jiazhengrenyuan_list.aspx'
    })
  },

  hysjiazhengpeixun: function () {
    wx.navigateTo({
      url: '../webview/webview?ttt=&page=https://m.0734lmz.cn/peixunxuexiao.aspx'
    })
  },

  hyshuiyuanzhongxin: function () {
    wx.navigateTo({
      url: '../webview/webview?ttt=&page=https://m.0734lmz.cn/weixin/index.aspx'
    })
  },
//衡阳县
  hyxbaojieyuyue: function () {
    wx.navigateTo({
      url: '../webview/webview?ttt=&page=https://hyx.0734lmz.cn:442/zhongdianbaojie.aspx'
    })
  },

  hyxjujiabaomu: function () {
    wx.navigateTo({
      url: '../webview/webview?ttt=保姆&page=https://hyx.0734lmz.cn:442/jiazhengrenyuan_list.aspx'
    })
  },

  hyxyuesao: function () {
    wx.navigateTo({
      url: '../webview/webview?ttt=月嫂&page=https://hyx.0734lmz.cn:442/jiazhengrenyuan_list.aspx'
    })
  },

  hyxyuyingshi: function () {
    wx.navigateTo({
      url: '../webview/webview?ttt=育婴师&page=https://hyx.0734lmz.cn:442/jiazhengrenyuan_list.aspx'
    })
  },

  hyxjiazhengpeixun: function () {
    wx.navigateTo({
      url: '../webview/webview?ttt=&page=https://hyx.0734lmz.cn:442/peixunxuexiao.aspx'
    })
  },

  hyxhuiyuanzhongxin: function () {
    wx.navigateTo({
      url: '../webview/webview?ttt=&page=https://hyx.0734lmz.cn:442/weixin/index.aspx'
    })
  },
  
  onLaunch: function () {
    console.log('loading Launching ...');
  },
  onShow: function () {
    var that = this;
    setTimeout(function () {
      that.setData({
        hidden: true
      });
    }, 1500);
  },

  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;

    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
  },

  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }  
});
