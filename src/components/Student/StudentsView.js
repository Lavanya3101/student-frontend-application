import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {FaEdit, FaEye, FaTrashAlt} from 'react-icons/fa';
import Search from '../common/Search';
const StudentsView = () => {
    const [student,setStudents]=useState([]);
    const [search,setSearch]=useState("");
useEffect(()=>{
    loadStudents();
},[]);
    const loadStudents=async()=>{
        const result=await axios.get("http://localhost:8080/students/getAll",{
            validateStatus:()=>{
                return true;
            }
        });
        if(result.status===302){
            setStudents(result.data);
        }
        
    }
    // const handleDelete=async(id)=>{
    //     await axios.delete(`http://localhost:8080/student/delete/${id}`);
    //     loadStudents();
    //     }
    const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:8080/students/delete/${id}`
		);
		loadStudents();
	};
  return (
    <section>
        <Search search={search} setSearch={setSearch}/>
      <table className='table table-bordered table-hover shadow'>
        <thead>
            <tr className='text-center'>
                <th>Id</th>
                <th>FirstName</th>      
                <th>LastName</th>  
                <th>Email</th>        
                <th>Departments</th>
                <th colSpan={3}>Actions</th>

            </tr>
        </thead>
        <tbody className='text-center'> 
            {student.filter((st)=>st.firstName.toLowerCase().includes(search))
            .map((s,index)=>(
                <tr key={s.id}>
                    <td scope='row' key={index}>{index+1}</td>
                <td>{s.firstName}</td>
                <td>{s.lastName}</td>
                <td>{s.email}</td>
                <td>{s.department}</td>
                <td className='mx-2'>
                <Link to={`/Student-profile/${s.id}`} className='btn btn-info'><FaEye/></Link></td>
                <td className='mx-2'>
                    <Link to={`/editStudent/${s.id}`} className='btn btn-warning'><FaEdit/></Link></td>
<td className='mx-2'>
    <button className='btn btn-primary' onClick={()=>handleDelete(s.id)}><FaTrashAlt/></button></td>
            </tr>
            ))}
            
        </tbody>
      </table>
    </section>
  )
}

export default StudentsView
