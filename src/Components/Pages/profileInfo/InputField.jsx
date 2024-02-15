import React from 'react'

const InputField = ({ lavel, name, defaultValue }) => {
   return (
      <div className="text-base">
         <p className="text-blackText mb-3">{lavel}</p>
         <input
            name={name}
            defaultValue={defaultValue}
            className="outline-neme focus-within:outline-none py-3 px-3 w-full rounded-md border"
         />
      </div>
   )
}

export default InputField