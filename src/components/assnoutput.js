import React from 'react'
import { useSelector } from 'react-redux'

const Assn1Output = () => {
  const state=useSelector(state=>state?.CalReducer)

  return (
    <div>output:{state.output}</div>
  )
}

export default Assn1Output