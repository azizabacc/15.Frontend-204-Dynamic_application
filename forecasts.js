
import { timestampConvertor , meanTemperature,infoPerDay} from './functions.js';
import { coordData,resumeDayCard,resumeCard ,tagInfoday} from './tags.js';
import { plot } from './plots.js';

const apiKey ="0ecda526c9c0b753226bce63f940887d"
let main = document.querySelector('main');
let header = document.querySelector('header');
const tableContainer = document.querySelector('.table');
  

export const forecast = (lat,lon,averageTempByDay,averageWindSpeedByDay,resumecardDisplayer) =>{ 
    let headerData = document.createElement('div')
headerData.id='headerData';
    let forecastApi = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&&units=metric&lang=english&appid=${apiKey}`;
fetch(forecastApi)
.then(response => response.json())
.then(data=> {
    let name = data.city.name;
    let population = data.city.population.toString();
    let sunrise = timestampConvertor(data.city.sunrise)
    let sunset = timestampConvertor(data.city.sunset)
  
    coordData(headerData,name,population,sunrise,sunset);

    header.append(headerData) 
 

    for(let i=0; i<data.cnt; i++){
          meanTemperature(data.list,averageTempByDay,averageWindSpeedByDay);

  
       
    } 


    console.log(Object.values(averageTempByDay).length);
    for(let j=0;j<Object.values(averageTempByDay).length;j++){
        console.log(Object.keys(averageTempByDay)[j]);
        resumecardDisplayer.append(resumeDayCard(Object.keys(averageTempByDay)[j],Object.values(averageTempByDay)[j],Object.values(averageWindSpeedByDay)[j]));

    }

  
    tableContainer.append(tagInfoday(data.list));
    
})
.catch(error => {
  console.log('There was an error!', error);
});

}
//forecast weather api 
export const forecast3hours = (lat,lon,resumecardDisplayer3hours,tempPlot,windPlot) =>{ 
    let forecastApi = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&&units=metric&lang=english&appid=${apiKey}`;
fetch(forecastApi)
.then(response => response.json())
.then(data=> {

    
    let xdateHour= [];
    let ytemp = [];
    let ywind = [];
    let nowPrediction = document.createElement("div");
    nowPrediction.id="nowPrediction";
    nowPrediction.append(resumeCard(data.list[0].dt_txt,data.list[0].main.temp,data.list[0].weather[0].description,data.list[0].wind.speed))
    main.prepend(nowPrediction)
    for(let i=0; i<data.cnt; i++){
    
        //resumecardDisplayer3hours.append(resumeCard(data.list[i].dt_txt,data.list[i].main.temp,data.list[i].weather[0].description,data.list[i].wind.speed));
        
        xdateHour.push(data.list[i].dt_txt);
        ytemp.push(data.list[i].main.temp);
        ywind.push(data.list[i].wind.speed);
       
    } 



    plot(xdateHour,ytemp,'tempPlot','blue','Temperature Forecasts','Time','Temperature in °C')
    plot(xdateHour,ywind,'windPlot','red','Wind Forecasts','Time','Wind Speed in km/h')
  

    
})
.catch(error => {
  console.log('There was an error!', error);
});

}
