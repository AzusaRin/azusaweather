const axios = require('axios')
const getWeather = (city) => {
  return new Promise((resolve,reject)=>{
    axios.get(`https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=b8c7f4691d820aab021c67d3b5c77a74`)
    .then( (response) =>{
      resolve(response.data)
    })
    .catch((error)=> {
      console.log(error)
      reject('error')
    })
  })
  
}

module.exports = getWeather