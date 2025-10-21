import React, { useEffect, useState } from 'react';
import arr from '../Pages/Array.js';
import { Link } from 'react-router-dom';
function Home() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        setUser(arr);
    }, []);

    const deleteUser = (id) => {
        const updateUser = user.filter(user => user.id != id);
        setUser(updateUser);
    }
    return (
        <div className="min-h-screen min-w-[390px] flex justify-center items-center">
            <div className='bg-orange-400 p-6 flex gap-3 flex-col items-center  border-none rounded-lg'>
                <h1 className='text-2xl font-bold underline'>User Management</h1>
                <h1 className='text-xl font-medium '>CRUD APP</h1>
                <table className='border border-collapse border-gray-500'>
                    <thead>
                        <tr className='bg-cyan-300'>
                            <td className='border border-gray-500 p-2 text-center'>Name</td>
                            <td className='border border-gray-500   p-2 text-center'>Age</td>
                            <td className='border border-gray-500  p-2 text-center'> Actions</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            user.map((item, index) => {
                                // console.log("Home - User:", item.id, item.name); // Add this line

                                return (
                                    <tr key={index}>
                                        <td className='border border-gray-500 p-2'>{item.name}</td>
                                        <td className='border border-gray-500 p-2'>{item.Age}</td>
                                        <td className='border border-gray-500 p-2'>
                                            <Link to={`/edit/${item.id}`}>
                                                <button className='w-auto bg-green-400 mx-2 border border-gray-500 rounded-md mt-3 px-2 py-1 font-light'>Update</button>
                                            </Link>
                                            <Link>
                                                <button onClick={() => deleteUser(item.id)} className='w-auto bg-red-400 border border-gray-500 rounded-md  px-2 py-1 font-light'>Delete</button>
                                            </Link>
                                        </td>
                                    </tr>

                                )
                            })
                        }

                    </tbody>
                </table>

                <div className="inline-block bg-gray-400 text-md border border-gray-500 rounded-md mt-3 px-4 py-1 font-light">
                    <Link to={"/create"}>
                        <button className=' text-sm '>
                            Create new user
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;

