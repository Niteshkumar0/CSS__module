import React from 'react'
import BodyCSS from "./body.module.css"

export default function Body() {
  return (
    
      <form action=""  className={BodyCSS.formContainer}>
        <div className={BodyCSS.container}>
            <input type="text" placeholder='YOUR NAME' />
            <input type="text" placeholder='YOUR FULL NAME'/>
        </div>
      </form>
    
  )
}
