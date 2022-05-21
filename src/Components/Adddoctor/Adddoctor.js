import React from 'react'
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

function Adddoctor() {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const {data : services,isLoading} = useQuery('services',() => fetch('http://localhost:5000/services').then(res => res.json()))
    if(isLoading){
        return <Loading/>
    }
    const imageStorageKey = 'd61d89e72c251f0e152bb1ad06508a91'
    const onSubmit = async data => {
       const image = data.image[0]
       const formData = new FormData()
       formData.append('image',image)
       const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url,{
            method:'POST',
            body: formData

        }).then(res => res.json()).then(imgData =>{
         
            if(imgData.success){
                const img = imgData.data.url;
                const doctor = {
                    name:data.name,
                    email:data.email,
                    speciality:data.speciality,
                    img:img,

                }
                fetch('http://localhost:5000/doctor',{
                    method: 'POST',
                    headers:{
                        'content-type':'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    
                    },
                    body: JSON.stringify(doctor)
                }).then(res => res.json()).then(inserted =>{
                    if(inserted.acknowledged){

                        toast.success('successfully added a doctor')
                        reset()
                    }
                    else{
                        toast.error('failed to added a doctor')
                    }
                })
            }
        })
       
    };
  return (
    <div>
        <p className='text-3xl mx-6 my-3'>Add a doctor</p>
   
                <div className=" flex justify-center">
                <form onSubmit={handleSubmit(onSubmit)} >
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
                            <span className="label-text">speciality</span>
                        </label>
                        <select  {...register("speciality")} class="select w-full max-w-xs">
                            
                         {services.map(service =>   <option value={service.name}>{service.name}</option>)}
                            </select>
                    
                        {errors.speciality?.type === 'required' && <span className='label-text-alt text-red-500 ' >{errors.password.message}</span>}

                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="file"className="input input-bordered w-full max-w-xs" {...register("image", {
                            required: {
                                value: true,
                                message: "image is required!"
                            },
                
                        })} />

                        {errors.image?.type === 'required' && <span className='label-text-alt text-red-500 ' >{errors.name.message}</span>}

                    </div>
               
                    <input type="submit" value="Add doctor" className='btn btn-accent text-white w-full max-w-xs my-5' />
                </form>
                </div>
            
              
    </div>
  )
}

export default Adddoctor