import {  weatherFont, windFont, temperatureFont ,getDayName } from './functions.js';
export const resumeCard = (dt_txt,temp,weather,windNb) =>{
    let resumeCardContainer = document.createElement('div')
    resumeCardContainer.className="resumeCardContainer";

    let dateHour = document.createElement('div')
    dateHour.innerHTML=getDayName(dt_txt.slice(5,10))+'<br>'+dt_txt.slice(10,16);
    dateHour.id = "dateHour";

    let tempContainer = document.createElement('div')

    let temperature = document.createElement('div')
    temperature.textContent=temp.toString();
    let tempFont = document.createElement('div')
    tempFont.innerHTML=temperatureFont(temp);
    tempContainer.append(temperature);
    tempContainer.append(tempFont);

    let weatherContainer = document.createElement('div');
    let weatherDesc = document.createElement('div');
    weatherDesc.textContent = weather;
    let weathFont = document.createElement('div');
    weathFont.innerHTML= weatherFont(weather);
    weatherContainer.append(weatherDesc);
    weatherContainer.append(weathFont);

    let windContainer =  document.createElement('div');
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
    dateHour.id = "dateHour";

    let tempContainer = document.createElement('div')
    tempContainer.id ="tempContainer";
    let temperature = document.createElement('div')
    temperature.textContent=temp.toString();
    let tempFont = document.createElement('div')
    tempFont.innerHTML=temperatureFont(temp);
    tempContainer.append(temperature);
    tempContainer.append(tempFont);



    let windContainer =  document.createElement('div');
    windContainer.id = 'windContainer'
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

    sunriseContainer =document.createElement('div');
    sunriseContainer.className="sunriseContainer";
    let sunriseLogo =document.createElement('div');
    let sunrise =document.createElement('div');
    sunrise.innerText = sunri ;

    sunsetContainer =document.createElement('div');
    sunsetContainer.className="sunriseContainer";
    let sunset =document.createElement('div');
    sunset.innerText =sunse;
    headerData.append(name);
    headerData.append(population);
    headerData.append(sunrise);
    headerData.append(sunset);
    
    
}
