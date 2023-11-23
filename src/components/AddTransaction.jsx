import React from 'react'
import { useState } from 'react'

export const AddTransaction = () => {

 const [text, setText] = useState('');
 const [amount, setAmount] = useState('');

  return (
    <>
        <h3>Add new transaction</h3>
        <form action="">
            <div className='form-control'>
                <label htmlFor="text">Text</label>
                <input type="text" 
                value={text} onChange={(event)=>setText(event.target.value)}
                placeholder='Enter Text...'/>

            </div>

            <div className='form-control'>
                <label htmlFor='amount'>
                    Amount <br />
                    (negative - expense, positive-income)
                </label>
                <input type="number" value={amount} onChange={(event)=>setAmount(event.target.value)} placeholder='Enter Amount...' />
            </div>
        </form>
    </>  
    )
}
