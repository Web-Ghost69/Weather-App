const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const apikey="d1237ebfd5433d3d431435a86828276d"

 let city = document.querySelector(".Input")
 let btn=document.querySelector("button")




 async function getWeather(city)
 {
    let  response= await fetch(apiUrl + city +`&appid=${apikey}`)
    let data=  await response.json()
     console.log(data)

     if(response.status== 404) {
        document.querySelector(".Weather-Container").style.display="none";

     }
     else
     {
     document.querySelector(".Temp").innerText=Math.round(data.main.temp) + '°C'
     document.querySelector(".City").innerText=data.name
     document.querySelector(".Humidity").innerText=data.main.humidity + "%"
     document.querySelector(".Wind").innerText=data.wind.speed + "Km/h"

     let img=document.querySelector(".Weather-icon")

     if(data.weather[0].main== "Clouds")
        {
            img.src ="images/clouds.png"
        }
        else if (data.weather[0].main== 'Clear')
            {
                img.src ="images/clear.png"
            }
            else if (data.weather[0].main== 'Drizzle')
                {
                    img.src ="images/drizzle.png"
                }
                else if (data.weather[0].main== 'Mist')
                    {
                        img.src ="images/mist.png"
                    }
                    else if (data.weather[0].main== 'Snow')
                        {
                            img.src ="images/snow.png"
                        }
                        else if (data.weather[0].main== 'Rain')
                            {
                                img.src ="images/rain.png"
                            }
                                document.querySelector(".Weather-Container").style.display="block"

                        }
 }

btn.addEventListener("click" , (e)=>
    {
        getWeather(city.value)
    }
)
 