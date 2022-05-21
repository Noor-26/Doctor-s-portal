import React from 'react'
import { toast } from 'react-toastify'

function Doctors({doctor,index,refetch,setDeleteDoctor}) {
    const {name,img,speciality,email} = doctor

    
  return (
    <tr>
    <th>{index + 1}</th>
    <td><div class="avatar">
  <div class="w-8 rounded">
    <img src={img} alt={name} />
  </div>
</div></td>
    <td>{name}</td>
    <td>{speciality}</td>
    <td>
<label for="my-modal-3" class="btn modal-button btn-xs btn-accent" onClick={() => setDeleteDoctor(doctor)} >Delete</label>

        
    </td>
  </tr>
  )
}

export default Doctors