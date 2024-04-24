import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] lg:mx-20 p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='px-8 absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col items-center'>
            <h1 className='px-4 mt-10 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>"Grill <span className='text-orange-500'>Happiness"</span></h1>
            <h1 className='px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Bite</span> <span>into Flavor!</span></h1>
            {/* <p className='px-4 mt-16 text-md sm:text-lg md:text-xl lg:text-2xl font-bold'>"Experience joy with every bite. Our burgers are crafted to ignite</p>
            <p className='px-7 text-md sm:text-lg md:text-xl lg:text-2xl font-bold'>your taste buds with delicious flavors, leaving you craving more satisfaction with each mouthwatering bite."</p> */}
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://www.shutterstock.com/image-photo/closeup-home-made-burgers-600nw-334701605.jpg" alt="" />
      </div>
    </div>
  )
}

export default Hero
