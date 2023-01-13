import React from 'react'

interface StylesProps {
  styles: string
}

function Button({styles}: StylesProps) {
  return (
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Get Started
    </button>
  )
}

export default Button