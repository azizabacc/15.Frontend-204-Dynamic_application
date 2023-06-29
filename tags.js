import {  weatherFont, windFont, temperatureFont ,getDayName } from './functions.js';
import { sunLogo } from './logo.js';

export const resumeCard = (dt_txt,temp,weather,windNb) =>{
    let resumeCardContainer = document.createElement('div')
    resumeCardContainer.className="resumeCardContainer";

    let dateHour = document.createElement('div')
    dateHour.className = "dateHourResumeCard ";
    let day =  document.createElement('h1');
    let hour =document.createElement('h2');
    day.innerText= getDayName(dt_txt.slice(5,10));
    hour.innerText=dt_txt.slice(10,16);
    dateHour.append(day);
    dateHour.append(hour);

    let tempContainer = document.createElement('div')
tempContainer.className = "tempContainerResumeCard"
    let temperature = document.createElement('div')
    temperature.textContent=temp.toString()+' °C';
    let tempFont = document.createElement('div')
    tempFont.innerHTML=temperatureFont(temp);
    tempContainer.append(temperature);
    tempContainer.append(tempFont);

    let weatherContainer = document.createElement('div');
    weatherContainer.className="weatherContainerResumeCard";
    let weatherDesc = document.createElement('div');
    weatherDesc.textContent = weather;
    let weathFont = document.createElement('div');
    weathFont.innerHTML= weatherFont(weather);
    weatherContainer.append(weatherDesc);
    weatherContainer.append(weathFont);

    let windContainer =  document.createElement('div');
    windContainer.className ="windContainerResumeCard"
    let windDesc =  document.createElement('div');
    windDesc.textContent=windNb.toString();
    let winFont =  document.createElement('div');
    winFont.innerHTML=windFont(windNb);
    windContainer.append(windDesc);
    windContainer.append(winFont);

    resumeCardContainer.append(dateHour);
    resumeCardContainer.append(tempContainer);
    resumeCardContainer.append(weatherContainer);
    resumeCardContainer.append(windContainer);

return resumeCardContainer;



}
export const resumeDayCard = (dt_txt,temp,windNb) =>{
    let resumeCardContainer = document.createElement('div')
    resumeCardContainer.className="resumeCardContainer";

    let dateHour = document.createElement('div')
    dateHour.innerHTML=getDayName(dt_txt);
    dateHour.className = "dateHour";

    let tempContainer = document.createElement('div')
    tempContainer.className ="tempContainer";
    let temperature = document.createElement('div')
    temperature.textContent=temp.toString()+' °C';
    let tempFont = document.createElement('div')
    tempFont.innerHTML=temperatureFont(temp);
    tempContainer.append(temperature);
    tempContainer.append(tempFont);



    let windContainer =  document.createElement('div');
    windContainer.className = 'windContainer'
    let windDesc =  document.createElement('div');
    windDesc.textContent=windNb.toString();
    let winFont =  document.createElement('div');
    winFont.innerHTML=windFont(windNb);
    windContainer.append(windDesc);
    windContainer.append(winFont);

    resumeCardContainer.append(dateHour);
    resumeCardContainer.append(tempContainer);
    resumeCardContainer.append(windContainer);

return resumeCardContainer;



}


    
export const coordData = (headerData,nam, pop, sunri, sunse ) =>{
    headerData.innerHTML='';
    let name = document.createElement('div');
    name.innerText = nam;
    let population = document.createElement('div');
    population.innerText = pop;

    let sunriseContainer =document.createElement('div');
    sunriseContainer.className="sunriseContainer"
    let canvaIconContainer = document.createElement('div');
    sunLogo(canvaIconContainer );
    let sunrise =document.createElement('div');
    sunrise.innerText = sunri ;
    sunriseContainer.append(canvaIconContainer);
    sunriseContainer.append(sunrise);

    let sunsetContainer =document.createElement('div');
    sunsetContainer.className="sunriseContainer";
    let sunset =document.createElement('div');
    sunset.innerText =sunse;
    headerData.append(name);
    headerData.append(population);
    headerData.append(sunriseContainer);
    headerData.append(sunset);
    
    
}
