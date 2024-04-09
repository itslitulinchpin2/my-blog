import { sendEmail } from '@/app/services/email';
import * as yup from 'yup';
const bodySchema = yup.object().shape({
    from:yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
});

export async function POST(request:Request){


    const body = await request.json();
   
    if(!bodySchema.isValidSync(body)){

        return new Response(JSON.stringify({message:'메일 전송 실패'}),
        {status: 500});
        
    }

        const {from,subject,message} = body;

        return sendEmail(body)
        .then(()=>new Response(JSON.stringify(
            {message:'메일을 성공적으로 보냄'}), {
            status:200
        })).catch(error=>{
            console.error(error);
            return new Response(JSON.stringify({message:'메일 전송 실패'}),
        {status: 500})
        })
    
    
}