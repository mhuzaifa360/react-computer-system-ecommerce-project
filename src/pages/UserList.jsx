import React, { useEffect, useState } from 'react'
import Typography from '../components/common/Typography'
import axios from 'axios';

function UserList() {
    const [users,setUsers] = useState([]);  
    const getUsers = async()=>{
        const response = await axios.get("http://localhost:3000/v1/getUser");
        setUsers(response.data);
        
    }
    useEffect(()=>{
        getUsers();
    },[])
    // console.log(users);
    
  return (
    <div className='flex flex-col justify-center items-center p-3'>
      <Typography varient='h3'>Users List</Typography>
      {/* TABLE FOR USERS LIST */}
      <div className='bg-slate-200 w-full p-3 flex flex-col justify-center items-center'>
        <table className='w-[80%] border'>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
                <th></th>
            </tr>
            {
                
            }
        </table>
      </div>
    </div>
  )
}

export default UserList
