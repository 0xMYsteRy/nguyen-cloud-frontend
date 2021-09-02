import axios from 'axios';
import { useState, useEffect } from "react";

// My IP got ban due to fetching too much, check this with yours if still work
// const test_url='https://covid19.mathdro.id/api' //John Hospkin API;

const url = 'https://isnxkflyz4.execute-api.us-east-1.amazonaws.com/prod/covids';

export default function CountriesSummary() {
    const [countriesSummary, setCountriesSummary] = useState([]);
    useEffect(() => {
      axios
        .get('https://isnxkflyz4.execute-api.us-east-1.amazonaws.com/prod/covids')
        .then((res) => {
          setCountriesSummary(res.data.CovidSummarys);
      
        })
        .catch((err) => console.error(err))
    }, []
    )
}    
// Async data
export const fetchData = async () => {
    try{
        const { CovidSummarys: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);

        // Destruct data
        const modifiedData = {confirmed, recovered, deaths, lastUpdate};
        
        return modifiedData;
    } catch (error) {}
}

export const fetchDailyData = async () => {
    try {
        const data = await axios.get(`${url}:/daily`);

        console.log(data);

    } catch (error){

    }
}