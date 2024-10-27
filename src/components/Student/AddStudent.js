import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    })
    const navigate=useNavigate();
    const { firstName, lastName, email, department } = student;
    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };
//     const saveStudent=async(e)=>{
// e.preventDefault();
// await axios.post("http://localhost:8080/student/save",student);

//     };
const saveStudent = async (e) => {
    e.preventDefault();
    console.log(student);
    // try{
    await axios.post(
        "http://localhost:8080/students/save",student);
    // }
    // catch(error){
    //     console.log("error")
    // }
     navigate("/viewStudents");
};


    return (
        <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
            <form onSubmit={saveStudent}>
                 <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='firstName'>FirstName</label>
                    <input className='form-control col-sm-6' type='text' name='firstName' id='firstName' required value={firstName} onChange={(e) => handleInputChange(e)} />
                </div> 
                
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='lastName'>LastName</label>
                    <input className='form-control col-sm-6' type='text' name='lastName' id='lastName' required value={lastName} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='email'>Email</label>
                    <input className='form-control col-sm-6' type='text' name='email' id='email' required value={email} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='department'>Department</label>
                    <input className='form-control col-sm-6' type='text' name='department' id='department' required value={department} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='row mb-5'>
                    <div className='col-sm-2'>
                        <button type='submit' className='btn btn-outline-success btn-lg'> Save</button>
                    </div>
                    <div className='col-sm-2'>
                        <Link to='/viewStudents'type='submit' className='btn btn-outline-success btn-lg'> Cancel</Link>
                    </div>
                </div>




            </form>

        </div>
    )
}

export default AddStudent
