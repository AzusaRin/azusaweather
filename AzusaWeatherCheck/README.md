# azusaweather 一款城市具体天气查询工具


## 使用方法：

``` const getWeather = require('azusaweather')
getWeather(city's adcode*).then(data =>{console.log(data)}).catch(err =>{console.log(err)})
```


## 注意：
需要输入城市adcode编码来查询，具体请下载:https://a.amap.com/lbs/static/amap_3dmap_lite/AMap_adcode_citycode.zip
