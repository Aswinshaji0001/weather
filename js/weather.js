async function button(){
    try{
        const a=document.getElementById("text").value;
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=d82dce617113dc86ab2408e76df76adb`);
        if(res.status==404 || res.status==400){
            console.log("CITY NOT FOUND");
            
        }
        else{
            const weather=await res.json();
            console.log(weather);
            document.getElementById("con4").innerHTML=`
            <div class="con3" id="con3">
                <h2 class="mainn">${weather.name}</h2>
                <h1 class="maint">${(weather.main.temp-273.15).toString().substring(0,4)}<sup>°C</sup></h1>
                <h3 class="mainw">${weather.weather[0].main}</h3>
                <div class="mainw" id="m1">
                <img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="icon">
                </div>
            <div class="tbl">
                <h3>Weather Details</h3>
                <table>
                    <tr>
                    <td>
                        <p>Feels like</p>
                        <h3>${weather.main.feels_like}</h3>
                    </td>
                    <td>
                        <p>Condition</p>
                        <h3>${weather.weather[0].main}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Wind</p>
                        <h3>${weather.wind.speed}km/h</h3>
                    </td>
                    <td>
                        <p>Humdity</p>
                        <h3>${weather.main.humidity}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Visibility</p>
                        <h3>${weather.visibility/1000}km</h3>
                    </td>
                    <td>
                        <p>Air Pressure</p>
                        <h3>${weather.main.pressure}hPa</h3>
                    </td>
                </tr>
                </table>
            </div>
            </div>`
            
        }
    }
    catch(error)
    {
        console.log(error);
    }   
}

    
    