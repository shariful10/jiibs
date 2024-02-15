import React from 'react'

const EditFieldLavel = ({ heading, subHeading, children }) => {
   return (
      <div className="flex justify-between items-center mt-5 md:mt-10">
         <div className="flex flex-col gap-1">
            <h4 className="text-[15px] text-blackText font-semibold">
               {heading}
            </h4>
         </div>
         {children}
      </div>
   )
}

export default EditFieldLavel

