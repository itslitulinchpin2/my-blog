
import React from 'react'
import { getWeatherData } from '../services/weather'
import RainyImage from '../../../public/weather/rainy.png'
import SunnyImage from '../../../public/weather/sunny.png'
import CloudyImage from '../../../public/weather/cloudy.png'
import Image from 'next/image'

function getWeatherImageURL(main:string){
  if(main=="Rain"){
    return '/images/weather/rainy.png'
  } else if (main=="Cloudy"){
    return '/images/weather/cloudy.png'
  } else {
    return '/images/weather/sunny.png'
  }
}

export default async function WeatherCard() {

     const data = await getWeatherData();
     const weather = data.weather[0];
     const main = weather.main
     
  return (
    <section className='bg-gray-100 text-center m-8 p-8  '>
      <h2 className='text-2xl font-bold'>The weather where I am!</h2>
      <div className='flex justify-center items-center flex-col'>
      
      <h2 className='text-xl m-2'>{data.name}</h2>

      <Image width={200} height={200} alt={main} src={getWeatherImageURL(main)}></Image>
    
      <h2 className='m-2 text-sm'>{main}</h2>
      </div>
  </section>
  )
}
