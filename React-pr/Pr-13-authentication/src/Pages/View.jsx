import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Delete_Record, View_Record } from '../Redux/UserAction/UserAction';

const View = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(View_Record())
  },[])
  
  let  record = useSelector(state => state.user.UserList)


  // ----------------------------- TO DELETE A RECORD --------------------------------
  const handleDelete =(id) =>{
      dispatch(Delete_Record(id))
    alert("YOUR RECORD IS BEING DELETED....!")
  }
    return (
    <div align='center'>
      <h1>View Detail</h1>
      <div>
        <Link to={'/'}>
        <button  className='btn bg-primary text-white'>Add</button>
        </Link>
       
      </div>

      <div className='p-5'>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">srno</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
 <tbody>
  {
   record && record.map((item) => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>{item.phone}</td>
          <td>
            <button className='btn btn-danger text-white' onClick={() => handleDelete(item.id)}>Delete</button> 
            <button className='btn btn-info ms-2 text-white' onClick={ () => navigate(`/edit`,{state:item})}>Edit</button>
          </td>
        </tr>
      )
    })
  }
 </tbody>
</table>
      </div>
    </div>
  )
}

export default View
