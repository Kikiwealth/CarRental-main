import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
import CarCard from './CarCard'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { motion } from 'motion/react'


const FeaturedSelection = () => {

    const navigate = useNavigate()
    const {cars} = useAppContext()

  return (
    <motion.div
    initial={{ opacity: 0, y: 40}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 1, ease: "easeOut"}}
     className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>

        <div>
            <Title title='Featured Vehicle' subTitle='Explore out selection of premium vehicles available for your next adventure.' />
        </div>

        <motion.div 
        initial={{ opacity: 0, y: 100}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1, delay: 0.5}}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
        {
          cars.slice(0,6).map((car) => (
            <motion.div key={car._id}
            initial={{ opacity: 0, scale: 0.95}}
            whileInView={{scale: 1, opacity: 1}}
            transition={{duration: 0.4, ease: "easeOut"}}
            >
                <CarCard car={car}/>
            </motion.div>
          ))
        }
        </motion.div>

        <motion.button 
        initial={{ opacity: 0, y: 20}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.4, delay: 0.6}}
        onClick={() => {
          navigate('./cars'); scrollTo(0,0)
        }} 
        className='flex items-center justify-center gap-2 px-6 py-2 border borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer'>
          Explore all cars <img src={assets.arrow_icon} alt="arrow" />
        </motion.button>
      
    </motion.div>
  )
}

export default FeaturedSelection
