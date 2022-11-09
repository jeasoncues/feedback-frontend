import React from 'react'
import { RiDashboardLine, RiSurveyLine, RiHomeLine, RiBookmark2Fill, RiLineChartLine, RiLogoutBoxRLine} from "react-icons/ri";
import {Link} from 'react-router-dom'

const Sidebard = () => {
  return (
    <div>
        {/* Logo */}
        <div className='text-center p-8'>
            <img src="../../../public/logo.png" width="200" height="50" alt="logo"/>
         </div>
         {/* Menu */}
         <div className='flex flex-col justify-between h-[500px]'>
            <nav>
                <ul>
                    <li>
                        <a href="#" className='flex items-center text-gray-500 font-semibold gap-4 hover:bg-[#eb0003] p-3 hover:text-white rounded-lg transition-colors'>
                        
                        <RiDashboardLine />
                        Dashboard
                        </a>
                    </li>
                    <li>
                        <Link to={'/companies'} className='flex items-center text-gray-500 font-semibold gap-4 hover:bg-[#eb0003] p-3 hover:text-white rounded-lg transition-colors'>
                            <RiHomeLine />
                            Locales
                        </Link>
                        
                    </li>
                    <li>
                        <a href="#" className='flex items-center text-gray-500 font-semibold gap-4 hover:bg-[#eb0003] p-3 hover:text-white rounded-lg transition-colors'>
                        <RiSurveyLine />
                        Encuestas
                        </a>
                    </li>
                    <li>
                        <a href="#" className='flex items-center text-gray-500 font-semibold gap-4 hover:bg-[#eb0003] p-3 hover:text-white rounded-lg transition-colors'>
                        <RiBookmark2Fill />
                        Cupones
                        </a>
                    </li>

                    <li>
                        <a href="#" className='flex items-center text-gray-500 font-semibold gap-4 hover:bg-[#eb0003] p-3 hover:text-white rounded-lg transition-colors'>
                        <RiLineChartLine />
                        Reportes
                        </a>
                    </li>
                </ul>
            </nav>
            {/* Imagen */}
            <div className='flex flex-col gap-4 p-2'>
                {/* <img src="survey.svg" alt="image" /> */}
                <div className='bg-[#fcf0f0] p-8 flex flex-col gap-4 rounded-2xl'>
                    <h3 className='text-1xl text-center font-semibold'>Bienvenido</h3>
                    <p className='text-gray-500 text-center'>
                        Lorem ipsum dolor sit me consecut.
                    </p>
                    <button className='bg-[#eb0003] rounded-lg text-white p-2'>
                       Ver más
                    </button>
                </div>
                <a href="#" className='flex items-center text-gray-500 font-semibold gap-4 hover:bg-[#eb0003] p-3 hover:text-white rounded-lg transition-colors'>
                    <RiLogoutBoxRLine />
                    Salir
                </a>
            </div>
         </div>
    </div>
  )
}

export default Sidebard