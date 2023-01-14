import React from 'react'
import Link from 'next/link'
import { useSelector,useDispatch } from 'react-redux'
import { setcount,reducecount } from '../store/counterSlice'

export default function Test() {
  const dispatch = useDispatch()
  const {count} = useSelector((state=>state.counter))
  return (
    <div>
        <div className='text-blue-500 text-xl'>Test page 2  <span className="block"><Link href={"/"}>TO Home</Link></span></div>
        <div className='flex justify-center text-xl font-semibold'>
           <span>Count is {count}</span>
           <div>
            <button className="border mx-2" onClick={()=>{
        dispatch(setcount())
      }}>Add Number</button>
            <button className="border mx-2" onClick={()=>{dispatch(reducecount())}}>Reduce Number</button>
           </div>
          </div>
    </div>

  )
}
