// pages/lxjsq/lxjsq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bj: 10000,
    lx: 10,
    sl: 0,
    inputValue: 0
  },
  bjInput: function (e) {
    this.setData({
      bj: e.detail.value
    })
  },
  lxInput: function (e) {
    this.setData({
      lx: e.detail.value
    })
  },
  slInput: function (e) {
    this.setData({
      sl: e.detail.value
    })
  },
  jslx: function (e) {
    var value = this.data.bj;  //改变视图本金
    var lx = this.data.lx;
    var sl = this.data.sl;
   

    for (var i = 0; i < sl; i++) {
      value = value * (1 + (lx / 100))
    }

    this.setData({
      inputValue: value.toFixed(2)
    })

   // 第一个月
    var value1 = this.data.bj;
    if(sl=1){
      value1 = 11000.00;
    }
    this.setData({
      inputValue1: value1.toFixed(2)
    })

   //第二个月
    var value2 = this.data.bj;
    if (sl = 2) {
      value2 = 12100.00;
    }
    this.setData({
      inputValue2: value2.toFixed(2)
    })

    //第三个月
    var value3 = this.data.bj;
    if (sl = 3) {
      value3 = 13310.00;
    }
    this.setData({
      inputValue3: value3.toFixed(2)
    })
  
    //第四个月
    var value4 = this.data.bj;
    if (sl = 4) {
      value4 = 14641.00;
    }
    this.setData({
      inputValue4: value4.toFixed(2)
    })

    //第五个月
    var value5 = this.data.bj;
    if (sl = 5) {
      value5 =16105.10 ;
    }
    this.setData({
      inputValue5: value5.toFixed(2)
    })

    //第六个月
    var value6 = this.data.bj;
    if (sl = 6) {
      value6 = 17715.61;
    }
    this.setData({
      inputValue6: value6.toFixed(2)
    })
  },

 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

