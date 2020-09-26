import axios from 'axios';
import tokens from '../../constants/Tokens';

class Requests {
    getRequest = async(path:string): Promise<any> => {
        return await axios.get(path);
    }

    getWeatherForecast = async(cityName:string) => {
        try {
          const weatherForecast = await this.getRequest(`https://api.weatherapi.com/v1/forecast.json?key=${tokens.weatherForecastToken}&q=${cityName}&days=1`);
          const data = weatherForecast.json();
          return data;
        } catch (error) {
          console.log('Error receiving weather forecast');
        }
      };
}

export default Requests;
