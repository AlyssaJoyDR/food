import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
//  console.log(data)
const [foods, setFoods] = useState(data)

// Filter Type burgers/pizza/wings
const filterType = (category) => { // updating the food state to the filter
    setFoods(
        data.filter((item) => {
            return item.category === category; // making sure that the category match in the items select
        })
    );
};

// Filter by price
const filterPrice = (price) => {
    setFoods(
        data.filter((item) => {
            return item.price === price; // making sure that the price is match in the items select
        })
    );
};


    return (
        <div className='max-w-[1640px] lg:mx-20 px-4 py-12'>
            <h1 className='text-yellow-600 font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-10 duration-300'>Top Rated Menu Items</h1>

            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>

                {/* Filter Type */}
                <div>
                    <p className='m-1 font-bold text-yellow-800'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => setFoods(data)} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>
                            All
                        </button>
                        <button onClick={() => filterType('burger')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>
                            Burgers
                        </button>
                        <button onClick={() => filterType('pizza')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>
                            Pizza
                        </button>
                        <button onClick={() => filterType('chicken wings')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>
                            Chicken Wings
                        </button>
                        <button onClick={() => filterType('salad')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>
                            Salads
                        </button>
                    </div>
                </div>

                    {/* Filter Price */}
                    <div>
                        <p className='m-1 font-bold text-yellow-800'>Filter Price</p>
                        <div className='flex justify-between max-w-[390px] w-full'>
                            <button onClick={() => filterPrice('₱')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>
                                ₱
                            </button>
                            <button onClick={() => filterPrice('₱₱')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>
                                ₱₱
                            </button>
                            <button onClick={() => filterPrice('₱₱₱')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>
                                ₱₱₱
                            </button>
                            <button onClick={() => filterPrice('₱₱₱₱')} className='m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'>
                                ₱₱₱₱
                            </button>
                        </div>
                    </div>
            </div>


        {/* Display Foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name}
                    className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p className=''>
                            <span className='bg-yellow-600 text-white p-1 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ) )}
        </div>

        </div>
    )
}

export default Food
