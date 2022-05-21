import React from 'react'
import {useQuery} from 'react-query'
import Loading from '../Shared/Loading/Loading';
import Userrole from './Userrole';

function User() {
    const {data:users,isLoading,refetch} = useQuery('users',()=>fetch('http://localhost:5000/users',{
        method:'GET',
        headers:{
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()))

    if(isLoading){
        return <Loading/>
    }
  return (
    <div>
         <p className='text-2xl'>All Users </p> 
         <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    
     {users.map((user,index)=><Userrole user={user} index={index} key={user._id} refetch={refetch}/>)}
     
    </tbody>
  </table>
</div>

    </div>
  )
}

export default User;