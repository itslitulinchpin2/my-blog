import Image from "next/image";

export default function Home() {
  const id =[11,22]
  return (
<>
  <h1>Hello, Next JS! </h1>
  <ol>
  {id.map(item=>{
    return( <li key={item}>{item}</li>)
  })}
  </ol>
  <h2>haha</h2>
  <h3>my blog init</h3>
  </>
  );
 
}
