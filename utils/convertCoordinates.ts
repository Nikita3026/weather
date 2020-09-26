import {NumberCoordinates, StringCoordinates} from '../interfaces/Coordinates';

export default function convertCoordinates(latitude: number, longitude:number):StringCoordinates {
    const degrees:NumberCoordinates = {
        latitude: Math.trunc(latitude),
        longitude: Math.trunc(longitude)
    }
    const minutes:NumberCoordinates = {
        latitude: Math.trunc((latitude - degrees.latitude)* 60),
        longitude: Math.trunc((longitude - degrees.longitude)* 60)
    }
    const seconds:NumberCoordinates = {
        latitude: Math.round(((latitude - degrees.latitude)* 60 - minutes.latitude)*60),
        longitude:  Math.round(((longitude - degrees.longitude)* 60 - minutes.longitude)*60)
    }
    return {
        latitude:`${degrees.latitude}° ${minutes.latitude}' ${seconds.latitude}"`,
        longitude:`${degrees.longitude}° ${minutes.longitude}' ${seconds.longitude}"`
    };
}
