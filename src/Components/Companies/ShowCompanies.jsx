import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Sidebard from '../Sidebard'
import {Link} from 'react-router-dom'


const endpoint = 'http://localhost:8000/api'

const ShowCompanies = () => {

  let [products, setCompanies] = useState([])

  useEffect(() => {
    getAllCompanies()
  }, [])
 

  const getAllCompanies = async () => {
    const response = await axios.get(`${endpoint}/companies`)
    setCompanies(response.data)
  
  }
  const deleteBussines =  async (id) => {
    await axios.delete(`${endpoint}/bussines/${id}`)
    getAllCompanies()
  }

  return (
    <div className=' min-h-screen grid grid-cols-6'>
       <div className='col-span-1 p-8 border-r'>
         <Sidebard />
       </div>
       <div className='col-span-5 p-16'>
          <h1 className='font-semibold text-gray-400 text-2xl'>Locales</h1>
        <hr />  
        <div className='py-4 '>
          <Link to={`/companies/create`}>
            <button className='bg-[#eb0003] rounded-md text-white px-4 py-2 mx-4'>
              Crear
            </button>
          </Link>
        
       
        </div>
        <div className="overflow-x-auto relative py-4 ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700  bg-gray-200  dark:text-gray-400 border">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Id
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nombre
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Descripcion
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Ubicacion
                            </th>
                        
                            <th scope="col" className="py-3 px-6">
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                            { products.map( (product) => (
                                <tr className="bg-white border-b hover:bg-blue-200" key={product.id}>
                                    <td className='p-4 px-6'> {product.id} </td>    
                                    <td className='p-4 px-6'> {product.name} </td>    
                                    <td className='p-4 px-6'> {product.description} </td>    
                                    <td className='p-4 px-6'> {product.city} </td>    
                                    <td class="py-4 px-6">
                                        <Link to={`/branchoffices/${product.id}`} className='font-medium text-gray-500 hover:underline px-3'>Sucursales</Link>
                                    
                                        <a href="#" className='font-medium text-gray-500 hover:underline px-3'>Editar</a>
                                        <a href="#" className='font-medium text-gray-500 hover:underline'>Eliminar</a>
                                    </td>

                                </tr>
                            )) }
                    
                    </tbody>
                </table>
            
            </div>

       </div>
    
    </div>
  )
}




export default ShowCompanies