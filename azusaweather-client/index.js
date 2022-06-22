#!/usr/bin/env node
const getWeather = require('azusaweather')
if(process.argv[2] === '--help'){
console.log(
  `
  Usage:
  weather <adcode>
  
  Example:
  weather 310000
  
  adcode of citys:https://a.amap.com/lbs/static/amap_3dmap_lite/AMap_adcode_citycode.zip
  `
)
}else{
  let city = process.argv[2]
  getWeather(city).then(data =>{

console.log('当前省份：'+ data.lives[0].province)
console.log('当前城市：'+ data.lives[0].city)
console.log('当前城市adcode：'+ data.lives[0].adcode)
console.log('当前天气：'+ data.lives[0].weather)
console.log('当前温度：'+ data.lives[0].temperature)
console.log('当前风向：'+ data.lives[0].winddirection)
console.log('当前风力：'+ data.lives[0].windpower)
console.log('当前湿度：'+ data.lives[0].humidity)
console.log('报告时间：'+ data.lives[0].reporttime)

  }).catch(err =>{
    console.log(err)
  })
}
