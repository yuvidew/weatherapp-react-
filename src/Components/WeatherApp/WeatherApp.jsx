import { Col } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import AppBarComp from './AppBar'
import { TextField } from '@mui/material'
import WeatherCard from './WeatherCard'

const WeatherApp = () => {
    const [location , setLocation ] = useState('')
    const [weatherData , setWeatherData] = useState([])

    let API_Key = 'a5a55c53d5794174b7e93927232712'

    useEffect(() => {
        const timeOut = setTimeout(() => {
            fetch(`http://api.weatherapi.com/v1/current.json?key=a5a55c53d5794174b7e93927232712&q=${location}&aqi=${API_Key}`)
            .then(res => res.json())
            .then(data => setWeatherData(data))
            .catch(err => console.log('theErro', err))
            } , 800)

        return () => clearTimeout(timeOut)

    } , [location])

    console.log('the ettot ', weatherData)

    return (<>
        <div className=' container'>
            <AppBarComp/>
            <section className='mt-5 d-flex align-items-center justify-content-center'>
            <Col xs={12} md={6} lg={4}>
                <TextField className='fs-2 w-100'  InputProps={{
                style: { fontSize: 20 }, // Adjust the font size here
                }}
                InputLabelProps={{
                style: { fontSize: 20 }, // Adjust the font size here
                }} label="Enter location" id="Enter location" onChange={(e) => setLocation(e.target.value)} />
            </Col>
            </section>
            {weatherData.error && location.length> 0 ?  
            <h2 className='text-center mt-3' style={{
                color : 'red'
            }}>No matching location found.</h2>
            :
            <h2></h2>
            }
            {weatherData.location && <WeatherCard wetObj = {weatherData} />}
        </div>
    </>)
}

export default WeatherApp