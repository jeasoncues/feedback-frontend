import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebard from '../Sidebard';

const endpoint = 'http://localhost:8000/api/bussines'

const CreateCompanies = () => {
    const [name, setName] = useState('Utaja')
    const [description, setDescription] = useState('Utaja carnes y parrillas')
    const [city, setCity] = useState('Piura')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {name: name, city: city, description: description})
        navigate('/companies')
    }
    
  return (
    <div className='min-h-screen grid grid-cols-6'>
        <div className='col-span-1 p-8 border-r'>
            <Sidebard/>
        </div>
        <div className='col-span-5 p-16'>
        <h1 className='font-semibold text-gray-400 text-2xl'>Crear Sucursal</h1>
            <form onSubmit={store} className="flex flex-col gap-4 p-8">
                {/* <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <input 
                        value={name}
                        onChange={ (e)=> setName(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div> */}
                
                 <div className="grid md:grid-cols-2 md:gap-6">
                    <label className='relative cursor-pointer'>
                        <input value={name} nChange={ (e)=> setName(e.target.value)} type="text" placeholder="Nombre" className='h-10 w-full px-6 text-1xl text-gray-500 bg-white border-gray-500 border-2 rounded-lg border-opacity-50 outline-none focus:border-red-400 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                        <span className='text-1xl text-white text-opacity-80 bg-white absolute left-5 top-6 px-1 transition duration-200 input-text'>Nombre *</span>
                    </label>
                    <label className='relative cursor-pointer'>
                        <input value={city} nChange={ (e)=> setCity(e.target.value)} type="text" placeholder="Ciudad" className='h-10 w-full px-6 text-1xl text-gray-500 bg-white border-gray-500 border-2 rounded-lg border-opacity-50 outline-none focus:border-red-400 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                        <span className='text-1xl text-transparent text-opacity-80 bg-white absolute left-5 top-6 px-1 transition duration-200 input-text'>Ciudad *</span>
                    </label>
                 </div>
                 <div className="grid md:grid-cols-2 md:gap-6">
                    <label className='relative cursor-pointer'>
                        <input value={description} nChange={ (e)=> setDescription(e.target.value)} type="text" placeholder="Nombre" className='h-10 w-full px-6 text-1xl text-gray-500 bg-white border-gray-500 border-2 rounded-lg border-opacity-50 outline-none focus:border-red-400 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                        <span className='text-1xl text-white text-opacity-80 bg-white absolute left-5 top-6 px-1 transition duration-200 input-text'>Direccion *</span>
                    </label>
                    
                 </div>
                 <div className='flex justify-end'>
                    <button
                        type="submit"
                        className="w-20 h-10 bg-[#eb0003] py-2 px-2 text-white rounded-md  transition-colors"
                        >
                        Guardar
                    </button>
                 </div>
            </form>
        <div>
        
        </div>
        </div>

    </div>
  )
}

export default CreateCompanies