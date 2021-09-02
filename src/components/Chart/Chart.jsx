import React, {useEffect, useState} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

import  styles from './Chart.module.css';

const Chart = () => {

    // 
    const [dailyData, setDailyData] = useState({});
    useEffect(()  => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData);
        }

        console.log(dailyData);

        fetchAPI();
    });

    // Line chart
    const lineChart = (
        <Line
            data = {{
                labels: '',
                datasets: [{},{}],

            }}
        />
    );

    return(
        <h1>Chart</h1>
    )
}


export default Chart;