// timestamp Convertor function 
export const timestampConvertor = (timestamp) =>{
    const sunrise = new Date(timestamp * 1000); // Convert to milliseconds
    // Get the components of the sunrise time
    const year = sunrise.getUTCFullYear();
    const month = sunrise.getUTCMonth() + 1; 
    const day = sunrise.getUTCDate();
    const hours = sunrise.getUTCHours();
    const minutes = sunrise.getUTCMinutes();
    const seconds = sunrise.getUTCSeconds();
    
    // Create a formatted string for the sunrise time
    const sunriseTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    return sunriseTime  
  
    }

    export const getDayName=(dateString)=> {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(dateString);
        const dayIndex = date.getDay();
        return daysOfWeek[dayIndex];
      }

      export const meanTemperature = (dataList,averageTempByDay,averageWindSpeedByDay ) => {
        const tempByDay = {};
        const windSpeedByDay = {};
      
        for (let i = 0; i < dataList.length; i++) {
          const dt_txt = dataList[i].dt_txt;
          const temp = dataList[i].main.temp;
          const windSpeed = dataList[i].wind.speed;
          const date = dt_txt.slice(0, 10);
      
          // Calculer la moyenne de la température par jour
          if (tempByDay[date]) {
            tempByDay[date].sum += temp;
            tempByDay[date].count++;
          } else {
            tempByDay[date] = {
              sum: temp,
              count: 1,
            };
          }
      
          // Calculer la moyenne de la vitesse du vent par jour
          if (windSpeedByDay[date]) {
            windSpeedByDay[date].sum += windSpeed;
            windSpeedByDay[date].count++;
          } else {
            windSpeedByDay[date] = {
              sum: windSpeed,
              count: 1,
            };
          }
        }
/*       
       const averageTempByDay = {};
        const averageWindSpeedByDay = {};  */
      
        for (const date in tempByDay) {
          const averageTemp = (tempByDay[date].sum / tempByDay[date].count).toFixed(1);
          averageTempByDay[date] = averageTemp;
        }
      
        for (const date in windSpeedByDay) {
          const averageWindSpeed = (windSpeedByDay[date].sum / windSpeedByDay[date].count).toFixed(1);
          averageWindSpeedByDay[date] = averageWindSpeed;
        }
      
      
      }
  export  const weatherFont = (weather) =>{
        let font ='';
        switch(weather){
            case 'broken clouds':
                font = '<i class="fa-brands fa-cloudflare" style="color: #787878;"></i>';
                break;
            case 'overcast clouds':
                font = '<i class="fi fi-rr-clouds"></i>';
                break;
            case 'few clouds':
                font = '<i class="fi fi-rr-cloud-sun"></i>';
                break;
                case 'clear sky':
                    font = '<i class="fi fi-br-brightness"></i>';
                    break;
            default :
            font = '<i class="fa-brands fa-cloudflare" style="color: #787878;"></i>';
                
        }
    
        return font
    } 
    
   export const windFont = (wind) =>{
        let font ='';
        switch(wind){
            case wind < 5:
                font = '<i class="fa-solid fa-arrow-down-wide-short" style="color: #1b5cc5;"></i>';
                break;
    
            default :
            font = '<i class="fa-solid fa-arrow-down-wide-short" style="color: #1b5cc5;"></i>';
                
        }
        return font
    } 
    
    export const temperatureFont = (temp) =>{
        let font ='';
        switch(temp){
            case temp >=20:
                font = '<i class="fa-solid fa-temperature-three-quarters" style="color: #c42121;"></i>';
                break;
            case temp<20 && temp>=15 :
                font = '<i class="fa-solid fa-temperature-three-quarters" style="color: #f09800;"></i>';
                break;
            case temp < 15:
                font = '<i class="fa-solid fa-temperature-three-quarters" style="color: #52e0bd;"></i>';
                break;
            default :
            font = '<i class="fa-solid fa-temperature-three-quarters" style="color: #757a79;"></i>';
                
        }
        return font
    } 