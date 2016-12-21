//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '卖我们喜欢的东西，遇眼光相似的人',
    userInfo: {'userName':'瓶盖美食','userImg':'../images/pgLogo.jpg'}

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onindex:function(){
      wx.navigateTo({
        url: "../act/act1",
    })
    console.log('a')
  }
  // onLoad: function () {
  //   var that = this
  //   //调用应用实例的方法获取全局数据
  //   app.getUserInfo(function(userInfo){
  //     //更新数据
  //     console.log(userInfo)
  //     that.setData({
  //       userInfo:userInfo
  //     })
  //     console.log(this)
  //   })
  // }
})