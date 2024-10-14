import React from 'react'

const Button = ({lable,iconURL}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'> 
      {lable}
     {
        iconURL && (
          <img src={iconURL} alt="arrow right" width={24} height={24} />
        )
     }
    </button>
  )
}

export default Button
