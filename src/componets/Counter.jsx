import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
  // state to hold the value from input box
  const [range , setRange]=useState("")


  // hook to dispatch a function
  const dispatch = useDispatch()
  // components can access the state by using useselector hook
  const count = useSelector((state)=>state.counter.value)

  console.log(range);

  return (
    <>
      <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column' >
      <h1 style={{fontSize:"90px"}}>{count}</h1>
      <div className='mt-5'>
        <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-3'>Decrement</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-warning p-3 ms-3'>Reset</button>
        <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-warning p-3 ms-3'>Increment</button>
      </div>
      
  
  </div>
  <div>
    <input onChange={(e)=>setRange(e.target.value)} type="text" className='form-control mt-5 ' placeholder='enter the range' />
  </div>
    </>
  )
}

export default Counter