import axios from 'axios';
import tokens from '../../constants/Tokens';

class Requests {
    getRequest = async(path:string): Promise<any> => {
        return await axios.get(path);
    }

    getPlaceFromCoordinates = async(latitude:string, longitude:string): Promise<any> => {
        try {
            const url =`https://discover.search.hereapi.com/v1/discover?at=${latitude},${longitude}&q=petrol+station&lang=en-US&apiKey=${tokens.geocodingToken}`;
            const res = await this.getRequest(url);
            return res.data.items[0].address;
          } catch (error) {
            console.log('Error receiving place name');
          }
    }

    getWeatherForecast = async(cityName:string) => {
        try {
          const weatherForecast = await this.getRequest(`https://api.weatherapi.com/v1/forecast.json?key=${tokens.weatherForecastToken}&q=${cityName}&days=1`);
          return weatherForecast.data.current;
        } catch (error) {
          console.log('Error receiving weather forecast');
        }
    };

    getCoordinatesFromCityName = async(cityName:string) => {
      try {
        const url =`https://geocode.search.hereapi.com/v1/geocode?q=${cityName}&apiKey=${tokens.geocodingToken}`;
        const res = await this.getRequest(url);
        return res.data.items[0];
      } catch (error) {
        console.log('Error receiving coordinates');
      }
    }
}

export default Requests;
