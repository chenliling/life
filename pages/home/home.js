const app = getApp()

Page({
  data: {
   
  },
  
   /**
   * 生命周期函数--监听页面加载
   * 一个页面只会调用一次调用
   * 获取当前页面所有query参数
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 一个页面只会调用一次
   * 可以和视图层进行交互
   */
  onReady: function () {
    if (this.data.current == 0) {

    }
  },

  /**
   * 生命周期函数--监听页面显示
    * 每次打开页面调用一次
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
    return{
      title:"自定义标题",
      path:"/paths/home?id=123"
    }

  }
   
})
