import StatisticData from '../interfaces/StatisticData';

const convertStatisticToTable = (statisticData:Array<StatisticData>):[string[]] => {
    const table: [string[]] = [];
    statisticData.forEach((item:StatisticData) => {
        const row:string[] =  [];
        row.push(item.cityName);
        row.push(`${item.latitude}\n${item.longitude}`);
        row.push(`${item.date}\n${item.time}`);
        table.push(row);
    });
    return table;
}

export default convertStatisticToTable;
