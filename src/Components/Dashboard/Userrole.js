import React from 'react'
import { toast } from 'react-toastify'

function Userrole({user,index,refetch}) {
    const {email,role} = user
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,
        {
            method:'PUT',
            headers:{
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error("Failed to make user admin  (-_-)")
            }
            res.json()})
        .then(data => {
            console.log(data)
        })
    }
    const deleteUser = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,
        {
            method:'DELETE',
            headers:{
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error("Failed to make user admin  (-_-)")
            }
            res.json()})
        .then(data => {
            console.log(data)
        })
    }
  return (
    <tr>
    <th>{index+1}</th>
    <td>{email}</td>
    <td>{role !== 'admin' && <button class="btn btn-xs btn-accent " onClick={makeAdmin}>make admin</button>}</td>
    <td><button class="btn btn-xs btn-accent ">remove user</button></td>
  </tr>
  )
}

export default Userrole