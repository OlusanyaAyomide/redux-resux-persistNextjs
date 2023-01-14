import React, { Fragment } from "react";
import Link from "next/link";
import { useSelector,useDispatch } from 'react-redux'
import { setcount,reducecount } from '../store/counterSlice'

export default function Home() {
  const dispatch = useDispatch()
  const {count} = useSelector((state=>state.counter))
  return(
  <Fragment>
    <div className="text-red-500 text-xl">Page 1 </div>
    <Link href={"/test"}>TO Test</Link>
    <div className='flex justify-center text-xl font-semibold'>Count is {count}
    <div>
      <button className="border mx-2" onClick={()=>{
        dispatch(setcount())
      }}>Add Number</button>
      <button className="border mx-2" onClick={()=>{dispatch(reducecount())}}>Reduce Number</button>
    </div>

    </div>

  </Fragment>);
}

