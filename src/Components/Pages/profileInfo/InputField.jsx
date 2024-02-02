import React from 'react'

const InputField = ({ lavel, name, defaultValue }) => {
   return (
      <div className="border rounded-md">
         <p className="text-[10px] text-darkGray pt-2 px-3">{lavel}</p>
         <input
            name={name}
            defaultValue={defaultValue}
            className="outline-neme focus-within:outline-none pb-2 px-3 w-full rounded-md"
         />
      </div>
   )
}

export default InputField