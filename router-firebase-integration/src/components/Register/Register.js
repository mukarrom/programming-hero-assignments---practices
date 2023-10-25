import React from 'react';

const Register = () => {
    return (
        <div>
            <h3 className='text-2xl font-bold my-4'>Pleas Register now</h3>
            <form action="">
                <input className='border m-2' type="text" name="" id="" placeholder='Your Name'/>
                <br />
                <input className='border m-2' type="email" name="" id="" placeholder='Your Email'/>
                <br />
                <input className='border m-2' type="password" name="" id="" placeholder='Your Password'/>
                <br />
                <input className='border rounded-lg font-bold px-4 py-2 my-2 hover:bg-green-500 hover:text-white' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;