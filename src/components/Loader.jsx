import React from 'react'
import {BarLoader} from "react-spinners"

function Loader() {
  return (
    <div className='w-fit mx-auto m-10'><BarLoader color='white' speedMultiplier='1.5' /></div>
  )
}

export default Loader