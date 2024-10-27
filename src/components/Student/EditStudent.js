import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Correctly get the student ID from the URL

    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
    });

    const { firstName, lastName, email, department } = student;

    // Load student data when the component mounts
    useEffect(() => {
        loadStudent();
    }, []);

    // Fetch student data by ID
    const loadStudent = async () => {
        console.log(`Fetching student with ID: ${id}`);
        try {
            const result = await axios.get(`http://localhost:8080/students/getById/${id}`);
            setStudent(result.data);
        } catch (error) {
            console.error("Error fetching student data:", error.response ? error.response.data : error.message);
        }
    };

    // Handle input changes in the form
    const handleInputChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    };

    // Update student information
    const updateStudent = async (e) => {
        e.preventDefault();
        // try {
            await axios.put(`http://localhost:8080/students/update/${id}`, student);
            navigate("/viewStudents"); // Redirect to the students view page
        // } catch (error) {
        //     console.error("Error updating student data:", error);
        // }
    };

    return (
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5">Edit Student</h2>
            <form onSubmit={updateStudent}>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="firstName">First Name</label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        value={firstName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="lastName">Last Name</label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        value={lastName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="email">Your Email</label>
                    <input
                        className="form-control col-sm-6"
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="department">Department</label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="department"
                        id="department"
                        required
                        value={department}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="row mb-5">
                    <div className="col-sm-2">
                        <button type="submit" className="btn btn-outline-success btn-lg">Save</button>
                    </div>

                    <div className="col-sm-2">
                        <Link to="/viewStudents" className="btn btn-outline-warning btn-lg">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditStudent;
