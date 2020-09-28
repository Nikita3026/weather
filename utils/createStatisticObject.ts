import StatisticData from '../interfaces/StatisticData';

const createStatisticObject = (cityName:string, latitude:string, longitude:string, date:string, time:string):StatisticData => {
    return(
        {
            id:Date.now(),
            cityName:cityName,
            latitude:latitude,
            longitude:longitude,
            date:date,
            time:time
        }
    );
}

export default createStatisticObject;
