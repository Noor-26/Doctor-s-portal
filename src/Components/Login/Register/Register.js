import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Shared/useToken/useToken';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [token] = useToken(user || googleUser)
      const navigate = useNavigate()
      let signError;

    if (token) {
        navigate('/appointment')
    }
    if (loading || googleLoading || updating) {
        return <Loading />
    }
    if (error || googleError || updateError) {
        signError = <p className='text-red-500 mt-2'>{error.message}</p>
    }
    const onSubmit = async data => {
        
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
       
    };
    return (
        <div className='flex h-screen justify-center items-center border'>
        <div className='card w-96 bg-base-100 shadow-xl p-4 '>
            <div className='card body p-4'>
                <p className='text-center font bold text-2xl'>Sign Up</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs" {...register("name", {
                            required: {
                                value: true,
                                message: "name is required!"
                            },
                
                        })} />

                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500 ' >{errors.name.message}</span>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" {...register("email", {
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
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your Password" className="input input-bordered w-full max-w-xs " {...register("password", {
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
                    <input type="submit" value="Sign up" className='btn btn-accent text-white w-full max-w-xs my-5' />
                </form>
                        <p className='font-bold'>Already a user?<Link to="/login" className='text-primary font-normal'> login here</Link> </p>
                <div className='divider'>OR</div>
                <button
                    className="btn btn-outline"
                    onClick={() => signInWithGoogle()}
                >Continue with google</button>
            </div>
        </div>
        </div>
    );
};

export default Register;