import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
const SIGNUP = 'Sign up';
const LOGIN = 'Login';

const Login = () => {
    const { token, setToken, navigate, backendUrl } = useContext(ShopContext)
    const [currentState, setCurrentState] = useState(LOGIN);

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (currentState === SIGNUP) {
                const response = await axios.post(
                    backendUrl + '/api/user/register', { name, email, password }
                );
                if (response.data.success) {
                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)
                } else {
                    toast.error(response.data.message)
                }
            }
            else {
                const response = await axios.post(
                    backendUrl + '/api/user/login', { email, password }
                );
                if (response.data.success) {
                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)
                } else {
                    toast.error(response.data.message)
                }
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token) {
            navigate("/")
        }
    }, [token, navigate])


    return (
        <form
            onSubmit={onSubmitHandler}
            className='pt-[141px] flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            {
                currentState === LOGIN ?
                    null :
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className='w-full px-3 py-2 border border-gray-800'
                        placeholder='Name'
                        required
                    />

            }
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className='w-full px-3 py-2 border border-gray-800'
                placeholder='Email'
                required
            />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className='w-full px-3 py-2 border border-gray-800'
                placeholder='Password'
                required
            />
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer'>Forget your password?</p>
                {
                    currentState === LOGIN ?
                        <p onClick={() => setCurrentState(SIGNUP)} className='cursor-pointer'>Create account</p> :
                        <p onClick={() => setCurrentState(LOGIN)} className='cursor-pointer'>Login here</p>
                }
            </div>
            <button className='bg-black text-white font-light px-8 py-2 mt-4'>
                {currentState === LOGIN ? "Sign In" : "Sign Up"}
            </button>
        </form>
    );
};

export default Login;