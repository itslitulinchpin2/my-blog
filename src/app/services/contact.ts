import { EmailData } from './email';



export async function sendContactEmail(email:EmailData){
    console.log("여기는 오지?");

    const response = await fetch('/api/contact',{
        method: 'POST',
        body:JSON.stringify(email),
        headers:{
            'Content-Type':'application/json'
        },
    }
    )
    console.log('여기는?')

    const data = await response.json();
    if(!response.ok){
        throw new Error(data.message || 'something wrong..!!');
    }

    return data;
}