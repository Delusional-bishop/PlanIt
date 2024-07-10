import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div>
      <SignIn   appearance={{
      layout:{socialButtonsVariant:'iconButton',
        logoImageUrl:'/favicon.svg'
    },
    elements:{
        formButtonPrimary:{
            backgroundColor:'green',
            border:'green'
        }
    },
    variables:{
      colorBackground:'#15171c',
      colorPrimary:'red',
      colorText:'white',
      colorInputBackground:'#1b1f29',
      colorInputText:'white',
      
      
    }
    }}/>
    </div>
  )
}

export default page
