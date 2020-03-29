Page({
  data: {
    markers: [{
      iconPath: "../../img/local.png",
      id: 0,
      latitude: 39.729992,
      longitude: 118.857491,
      width: 33,
      height: 33
     
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  onBack:function(){
    console.log("back")
    wx.navigateTo({
      url: '../index/index',
    })
  }
})