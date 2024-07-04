import React from 'react'
import "./style.css"
const Counter = ({ no, plus, subtraction, reset }) => {//props fetch

    return (
        //displyy:-- 

        <div align="center" className='counter'>
            <h3 >----: Using state and props :-----</h3>
            <h1 className='title'>Counter App</h1>
            <h2 className='counting'>{no}</h2>

            <button className='plus' onClick={() => plus()}>+</button>
            {
                no == 0 ? (
                    <button className='minus' disabled onClick={() => subtraction()}>-</button>
                ) : (
                    <button className='minus' onClick={() => subtraction()}>-</button>
                )
            }
            <button className='zero' onClick={() => reset()}>0</button>
        </div>
    )
}

export default Counter;



