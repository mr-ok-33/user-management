import React, { useState } from 'react'
import arr from './Array.js'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const { id } = useParams();
    console.log(id);
    const user = arr.find(item => item.id === id);
    const [name, setName] = useState(user?.name || '');
    const [age, setAge] = useState(user?.Age || '');

    const navigate = useNavigate();
    // console.log(user);

    const updateUser = (e) => {
        e.preventDefault();

        if (!name.trim() || !age.trim()) {
            alert("Please fill all fields...");
            return;
        }

        const userIndex = arr.findIndex(item => item.id === id);

        if (userIndex != -1) {
            arr[userIndex] = {
                ...arr[userIndex],
                name: name.trim(),
                Age: age.trim()
            };
        }

        navigate('/');
    }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className='bg-orange-400 p-10 border-none rounded-lg'>
                <h1 className='underline text-center text-xl '>Update User</h1>
                <form onSubmit={updateUser}>
                    <div className="">
                        <div className="flex flex-col my-5 gap-3">
                            <input className='border rounded-md w-full p-1 ' type="text" placeholder='Enter name' value={name} onChange={(e) => { setName(e.target.value) }} />
                            <input className='border w-full  rounded-md p-1  ' type="number" placeholder="Enter age" value={age} onChange={(e) => { setAge(e.target.value) }} />
                        </div>

                        <div className="flex flex-col gap-3 pt-3">
                            <button className="w-full  border rounded-md p-1 bg-green-500" type='submit' >Update</button>
                            <Link to={'/'}>
                                <button className="w-full  border rounded-md p-1 bg-green-500">Home</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edit