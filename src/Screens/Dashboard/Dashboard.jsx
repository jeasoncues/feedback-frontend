import React from 'react'
import Sidebard from '../../Components/Sidebard';

function Dashboard() {
  return (
    <div className=' min-h-screen grid grid-cols-6'>
       <div className='col-span-1 p-8 border-r'>
         <Sidebard />
       </div>
       <div className='col-span-5 '>
        
       </div>
    
    </div>
  )
}

export default Dashboard