import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Sidebard from '../Sidebard';
import {Link} from 'react-router-dom'


const endpoint = 'http://localhost:8000/api'

const ShowBranchOffices = () => {

  let [offices, setBranchOffices] = useState([])

  useEffect(() => {
    getAllBranchOffices()
    console.log(offices)
  }, [])
 

  const getAllBranchOffices = async () => {
    const response = await axios.get(`${endpoint}/branchoffices`)
    setBranchOffices(response.data)
  }

  return (
    <div className=' min-h-screen grid grid-cols-6'>
       <div className='col-span-1 p-8 border-r'>
         <Sidebard/>
       </div>
       <div className='col-span-5 p-16'>
          <h1 className='font-semibold text-gray-400 text-2xl'>Mis locales</h1>
         <hr />  
            <div className='py-4 '>
                <Link to={`/branchoffices/create`}>
                  <button className='bg-[#eb0003] rounded-md text-white px-4 py-2 mx-4'>
                      Crear
                  </button>
                </Link>
        
            </div>
          
            <div className='overflow-x-auto relative py-4'>
               
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-100'>
                
                   <div className='bg-gray-100 rounded-lg shadow hover:shadow-lg transition-all' >
                       <div className='flex flex-col items-center gap-2 p-4'>
                            <img
                                src="/public/home.svg"
                                className='object-cover rounded-tl-lg rounded-tr-lg w-40'
                            />
                       </div>
                       <div className='flex flex-col items-center gap-2 p-4'>
                            <h3 className='font-semibold text-1xl'>15 Lucas Angamos</h3>
                            <p className='text-gray-500'>Angamos N-122</p>
                       </div>
                   </div>
                   <div className='bg-gray-100 rounded-lg shadow hover:shadow-lg transition-all' >
                       <div className='flex flex-col items-center gap-2 p-4'>
                            <img
                                src="/public/home.svg"
                                className='object-cover rounded-tl-lg rounded-tr-lg w-40'
                            />
                       </div>
                       <div className='flex flex-col items-center gap-2 p-4'>
                            <h3 className='font-semibold text-1xl'>15 Lucas  Santa Margarita</h3>
                            <p className='text-gray-500'>Santa Margarita - Portales</p>
                       </div>
                   </div>
                </div>
           </div>

       </div>
       
    </div>
  )
}




export default ShowBranchOffices