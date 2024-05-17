
import React from 'react'
import { getWeatherData } from '../services/weather'

export default async function WeatherCard() {

     const data = await getWeatherData();
     const weather = data.weather[0];
    console.log("여기 봐 여기:", data)
    
  return (
    <section className='bg-gray-100 text-center'>
    <h2 className='text-2xl font-bold'>The weather where I am!</h2>
    <div>
     {data.name}
     {weather.main}
     {weather.description}
    </div>
  </section>
  )
}
