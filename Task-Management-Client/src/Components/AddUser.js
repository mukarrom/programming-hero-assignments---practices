import React, { useEffect, useState } from 'react';

const AddUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [users])

    const handleOnsubmit = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email }

        // send data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                // alert
                alert('users added successfully')
                // reset input
                e.target.reset();
            })
    }

    // Delete User 
    const handleDelete = (id) => {
        const proceed = window.confirm("Sure?");
        if (proceed) {
            console.log('deleted user with id:', id)
        }
    }
    return (
        <div>
            <h1 className='text-center'>Add New User</h1>
            <form
                onSubmit={handleOnsubmit}
                className='w-[400px] mx-auto space-y-3'
            >
                <input
                    className='input input-bordered w-full'
                    type="text"
                    name="name"
                    placeholder='User Name'
                    required
                />
                <input
                    className='input input-bordered w-full'
                    type="email"
                    name="email"
                    placeholder='User Email'
                    required />
                <input
                    type="submit"
                    value="Add User"
                    className='btn w-full' />
            </form>

            <h1 className='text-center mt-24'>Available Users: {users.length}</h1>
            {
                users.map(user => <div className='shadow-lg bg-slate-50 my-2 w-96 mx-auto p-5 text-center rounded-xl'>
                    <h5>User Name: {user.name}</h5>
                    <h6>User Email: {user.email}</h6>
                    <button
                        className='btn'
                        onClick={() => handleDelete(user._id)}
                    >Delete user</button>
                </div>
                )
            }
        </div>
    );
};

export default AddUser;