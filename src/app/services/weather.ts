

export async function getWeatherData(){
    const weatherKey =process.env.NEXT_PUBLIC_WEATHER_KEY
    // console.log(weatherKey);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${weatherKey}`)
    const result = await res.json();
    return result;
}