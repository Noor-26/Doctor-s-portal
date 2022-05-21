import React from 'react'
import { toast } from 'react-toastify'

function Deletemodal({deleteDoctor,refetch,setDeleteDoctor}) {
    const {name,email} = deleteDoctor
    const deleDoctor = () =>{
        fetch(`http://localhost:5000/doctor/${email}`,{
   method:'DELETE',
   headers:{
    authorization: `Bearer ${localStorage.getItem('accessToken')}`
}


        }).then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                toast.success(`Doctor: ${name} Deleted`)
                refetch()
                setDeleteDoctor(null)
            }
        })
    }
  return (
    <div>

<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">Are you sure you want to delete {name}</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
    <button class="btn btn-xs btn-accent"onClick={deleDoctor}>Delete</button>
      <label for="my-modal-3" class="btn btn-xs btn-accent">Cancel</label>
    </div>
  </div>
</div>
    </div>
  )
}

export default Deletemodal