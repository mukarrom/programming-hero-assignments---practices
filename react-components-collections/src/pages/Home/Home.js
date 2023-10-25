import React from 'react'
import Smart from './Smart'

const Home = () => {
    return (
        <div>
            <header>
                <h1 className="h1 bg-gray-50">Welcome to My Components</h1>
                <div className='py-[200px] bg-gray-50 -m-2'></div>
                <Smart/>
            </header>
        </div>
    )
}

export default Home