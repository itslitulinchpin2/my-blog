'use client';
import React, { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react';
import { BannerData } from './Banner';
import Banner from './Banner';
import { sendContactEmail } from '@/app/services/contact';
export default function ContactForm() {
   

    type Form = {
        from:string;
        subject:string;
        message:string;
    }
    const DEFAULT_DATA = {
        from:'',
        subject:'',
        message:''
    }
    const [form,setForm] = useState<Form>(DEFAULT_DATA);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name,value} = e.target;
        setForm((prev) =>({...prev, [name]:value}) )
    }
    const [banner,setBanner]=useState<BannerData|null>(null)

    const submitHandler = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        sendContactEmail(form)
        .then(()=>{
            
            setBanner({message:'전송되었습니다', state:'success'})
            setForm(DEFAULT_DATA);
        })
        .catch(()=>{
            setBanner({message:'전송 실패!', state:'error'})
        })
        .finally(()=>{
            setTimeout(()=>{
                setBanner(null);
            },3000)
        })
        
        
        
    }
  return (
    <section className='w-fill max-w-md'>
    {banner && <Banner banner={banner}/> }
    <form onSubmit={submitHandler} className='w-full max-w-md flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white'>
    <label htmlFor='from' className='font-semibold'>your email</label>
    <input className='text-black' type="email" placeholder='your name' name="from" onChange={onChange} id="from" required autoFocus value={form.from} />

    <label className='font-semibold' htmlFor='subject'>title</label>
    <input className='text-black' type="text" placeholder='your name' name="subject" onChange={onChange} id="subject" required  value={form.subject} />

    <label  className='font-semibold' htmlFor='message'>your message</label>
    <textarea className= 'text-black' rows={10}  placeholder='your message' name="message" onChange={onChange} id="message" required  value={form.message} />

   
    <button className='bg-yellow-300 text-black font-bold hover:bg-yellow-500'>Submit</button>
  </form>
  </section>
  )
}
