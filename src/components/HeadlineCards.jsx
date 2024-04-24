import React from 'react'

const HeadlineCards = () => {
    return (
        <div className='max-w-[1640px] lg:mx-20 p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-6 pt-4'>Sun's Out, BOGO's Out </p>
                    <p className='px-6'>Through 8/26</p>
                    <button className=' border-yellow-600 bg-yellow-500 text-black font-semibold mx-6 absolute bottom-4'>Order Now</button>
                </div>
                <img
                className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl'
                src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg"
                alt="/" 
                />
            </div>

            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-6 pt-4'>New Restaurants </p>
                    <p className='px-6'>Added Daily</p>
                    <button className='border-yellow-600 bg-yellow-500 text-black font-semibold mx-6 absolute bottom-4'>Order Now</button>
                </div>
                <img
                className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl'
                src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg"
                alt="/"
                />
            </div>

            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-6 pt-4'>We Deliver Desserts Too</p>
                    <p className='px-6'>Tasty Treats</p>
                    <button className='border-yellow-600 bg-yellow-500 text-black font-semibold mx-6 absolute bottom-4'>Order Now</button>
                </div>
                <img
                className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl'
                src="https://parade.com/.image/t_share/MjAwMjQwOTU4NDg1MzA4NTI0/what-happens-if-you-eat-a-burger-every-day.jpg"
                alt="/"
                />
            </div>
        </div>
    )
}

export default HeadlineCards
