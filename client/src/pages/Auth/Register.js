import React, { useState } from 'react'
import Layout from './../../components/Layout/Layout'
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../styles/AuthStyles.css";
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate()
    //form function
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            // const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address});
            const res = await axios.post('/api/v1/auth/register',{name,email,password,phone,address,answer});
            if(res && res.data.success){
                toast.success(res.data && res.data.message)
                navigate('/login');
            }else{
                toast.error(res.data.message)
            }
        } catch (error){
            console.log(error)
            toast.error('Something went wrong')
        }
        // console.log(name,email,password,phone,address);
        // toast.success("Register Successfully");
    }
    return (
        <Layout title="Register - Ecommer App">
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputName" className="form-label">Name</label> */}
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  className="form-control" id="exampleInputEmail1" placeholder='Enter Name' required/>

                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputName" className="form-label">Email</label> */}
                        <input type="email"value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Email" required/>

                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Enter Password" required/>
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputName" className="form-label">Phone</label> */}
                        <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Phone" required/>

                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputName" className="form-label">Address</label> */}
                        <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Address" required />

                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputName" className="form-label">Address</label> */}
                        <input type="text" value={answer} onChange={(e)=>setAnswer(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Your Favourite Sports" required />

                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>

            </div>
        </Layout>
    );
};

export default Register;