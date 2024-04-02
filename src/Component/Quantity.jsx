import React,{useState} from 'react'
import Totalamount from './Totalamout'
const Quantity=({price})=>{
 console.log(price);
 const[count,setCount]=useState(1)
 if(count>0){
return(
 <div className='flex flex-col gap-3'>
 <section className='flex justify-evenly items-center text-1xl font-semibold'>
 Quantity : 
 
 <button className='border px-3 text-center  border-slate-800 rounded text-1xl'
 onClick={()=>setCount(count-1)}>-</button>
 <p className='border px-3 text-center  rounded text-1xl'>{count}</p>
 <button className='border px-3 text-center  border-slate-800 rounded text-1xl'
  onClick={()=>setCount(count+1)}>+</button>
</section>
<Totalamount prize={price} count={count}/>
</div>
)
 }
}
export default Quantity;