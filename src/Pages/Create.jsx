import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import arr from './Array.js';

function Create() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const createUser = (e) => {

    e.preventDefault();

    if (!name.trim() || !age.trim()) {
      alert("Please fill all fields...");
      return;
    };

    const newUser = {
      id: (arr.length + 1).toString(),
      name: name.trim(),
      Age: age.trim()
    }

    arr.push(newUser);

    setName('');
    setAge('');

    navigate('/');
  }

  return (
    <div className="min-h-screen min-w-auto flex justify-center items-center">
      <div className='bg-orange-400 min-h-auto min-w-auto p-10 border rounded-lg gap-3 flex justify-center items-center flex-col'>
        <h1 className='text-xl underline'>Create User</h1>

        <form onSubmit={createUser}>
          <div className="">
            <div className="flex flex-col ">
              <input className='w-full min-w-full outline-none border-none rounded-sm my-3 p-1 ' type="text" placeholder='Enter name' onChange={(e) => { setName(e.target.value) }} />
              <input className='border-none outline-none rounded-sm w-full min-w-full my-3 p-1  ' type="number" placeholder="Enter age" onChange={(e) => { setAge(e.target.value) }} />
            </div>

            <div className="flex flex-col ">

              <button className='w-full bg-green-400 border border-gray-500 rounded-md mt-3 px-2 py-1 font-light'>Submit</button>
              <Link to={'/'}>

                <button className='w-full bg-green-400 border border-gray-500 rounded-md mt-3 px-2 py-1 font-light'>Home</button>
              </Link>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Create