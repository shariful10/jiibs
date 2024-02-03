import React from 'react'

const EditFieldLavel = ({ heading, subHeading, children }) => {
   return (
      <div className="flex justify-between items-center">
         <div className="flex flex-col gap-1">
            <h4 className="text-[15px] text-blackText font-semibold">
               {heading}
            </h4>
            <p className="text-sm text-darkGray">
               Change your current {subHeading}
            </p>
         </div>
         {children}
      </div>
   )
}

export default EditFieldLavel