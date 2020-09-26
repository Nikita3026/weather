import AdditionalData from '../interfaces/AdditionalData';

const createAdditionalData = (condition:string, feelsLike:number, humidity:number, wind:number):Array<AdditionalData> => {
    return([
        {
            id:'1',
            title:'',
            extra:'',
            data:condition
        },
        {
            id:'2',
            title:'Feels like: ',
            extra:'°',
            data:feelsLike
        },
        {
            id:'3',
            title:'Humidity: ',
            extra:'',
            data:humidity
        },
        {
            id:'4',
            title:'Wind: ',
            extra:' kph',
            data:wind
        }
    ]);
}

export default createAdditionalData;
