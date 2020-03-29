Page({
  data: {
    l:""
  },
  onLoad:function(){
    console.log("onload")
    var _this = this;
    _this.findXy() //查询用户与商家的距离
  },
  viewMoviePostImg: function (e) {
    wx.previewImage({
      current: "http://a2.qpic.cn/psb?/V11AlPoE0ZEDXe/Owj*jHAVhWyVvtrN.9P183zjt.kgtUQq6ZIMDXrLrw0!/c/dG0BAAAAAAAA&ek=1&kp=1&pt=0&bo=VAQ4BAAAAAAREEs!&t=5&tl=3&vuin=1321787581&tm=1585454400&sce=60-2-2&rf=0-0",
      urls: ["http://a2.qpic.cn/psb?/V11AlPoE0ZEDXe/Owj*jHAVhWyVvtrN.9P183zjt.kgtUQq6ZIMDXrLrw0!/c/dG0BAAAAAAAA&ek=1&kp=1&pt=0&bo=VAQ4BAAAAAAREEs!&t=5&tl=3&vuin=1321787581&tm=1585454400&sce=60-2-2&rf=0-0"]
    })
  },
  onCall:function(){
 
    wx.makePhoneCall({
      phoneNumber: '15227111790',
    })
  
  }, 
  onLocal:function(){
    wx.navigateTo({
      url: '../map/map',
    })
  },
  findXy() { //获取用户的经纬度
    var _this = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        _this.getDistance(res.latitude, res.longitude, 39.729992, 118.857491)
      }
    })
  },
  Rad: function (d) { //根据经纬度判断距离
    return d * Math.PI / 180.0;
  },
  getDistance: function (lat1, lng1, lat2, lng2) {
    // lat1用户的纬度
    // lng1用户的经度
    // lat2商家的纬度
    // lng2商家的经度
    var radLat1 = this.Rad(lat1);
    var radLat2 = this.Rad(lat2);
    var a = radLat1 - radLat2;
    var b = this.Rad(lng1) - this.Rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137;
    s = Math.round(s * 10000) / 10000;
    s = s.toFixed(2) + '公里' //保留两位小数
    console.log('经纬度计算的距离:' + s)
    this.setData({
      l:s
    })
    return s
  }
})
