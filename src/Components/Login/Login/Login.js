import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate() 
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
    let signError;


    if (user || googleUser) {
        navigate(from,{replace:true})
    }
    
    if (loading || googleLoading) {
        return <Loading />
    }
    if (error || googleError) {
        signError = <p className='text-red-500 mt-2'>{error.message}</p>
    }
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
        console.log("login complete")
    };
    return (
        <div className='flex h-screen justify-center items-center border'>
            <div className='card w-96 bg-base-100 shadow-xl p-4'>
                <div className='card body p-4'>
                    <p className='text-center font bold text-2xl'>Login</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" class="input input-bordered w-full max-w-xs" {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required!"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "The email is not valid"
                                }

                            })} />

                            {errors.email?.type === 'required' && <span className='label-text-alt text-red-500 ' >{errors.email.message}</span>}

                            {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500 ' >{errors.email.message}</span>}
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your Password" class="input input-bordered w-full max-w-xs " {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password not found!"
                                },
                                minLength: {
                                    value: 6,
                                    message: "The password must be 6 characters long"
                                }

                            })} />

                            {errors.password?.type === 'required' && <span className='label-text-alt text-red-500 ' >{errors.password.message}</span>}

                            {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500 ' >{errors.password.message}</span>}
                        </div>

                        {signError}
                        <input type="submit" value="Login" className='btn btn-accent text-white w-full max-w-xs my-5' />
                    </form>
                            <p className='font-bold'>Don't have a account?<Link to="/register" className='text-primary font-normal'> Create new account</Link> </p>
                    <div className='divider'>OR</div>
                    <button
                        class="btn btn-outline"
                        onClick={() => signInWithGoogle()}
                    >Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;