import React from 'react'
import { Col } from 'react-bootstrap'

const WeatherCard = (prop) => {
    let wONJ = prop.wetObj
    return (<>
        <section className='mt-5 d-flex align-items-center justify-content-center flex-column'>
            <h3 className='text-center'>{wONJ.location.name} , {wONJ.location.country}</h3>
            <Col xs={12} md={6} lg={4}>
                <div className="card w-1000" >
                    <ul className="list-group list-group-flush fs-4">
                    <img className='w-25' src={wONJ.current.condition.icon} alt="" />
                        <li className="list-group-item border-0">
                            <div className="d-flex align-items-center justify-content-between">
                                <h2>Temperature</h2>
                                <h2>{wONJ.current.temp_f} F / {wONJ.current.temp_c} C </h2>
                            </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="d-flex align-items-center justify-content-between">
                                <h2>Condition</h2>
                                <h2>{wONJ.current.condition.text}</h2>
                            </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="d-flex align-items-center justify-content-between">
                                <h2>Wind Speed</h2>
                                <h2>{wONJ.current.wind_mph} km/h</h2>
                            </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="d-flex align-items-center justify-content-between">
                                <h2>Humidity</h2>
                                <h2>{wONJ.current.humidity} %</h2>
                            </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="d-flex align-items-center justify-content-between">
                                <h2>Cloud Coverage</h2>
                                <h2>{wONJ.current.cloud} %</h2>
                            </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="d-flex align-items-center justify-content-between">
                                <h2>Last Updted</h2>
                                <h2>{wONJ.current.last_updated}</h2>
                            </div>
                        </li>
                    </ul>
                </div>
            </Col>
        </section>
    </>)
}

export default WeatherCard