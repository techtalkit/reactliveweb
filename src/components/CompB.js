import React, { useContext } from 'react'
// import CompC from './CompC'
import { FirstName,LastName } from '../App'

const CompB = () => {
  const fname=useContext(FirstName);
  const lname=useContext(LastName);
  return (
    <>  
        <h1>My first name is {fname} and last name is {lname}</h1>
        {/* <CompC /> */}
    </>
  )
}

export default CompB
