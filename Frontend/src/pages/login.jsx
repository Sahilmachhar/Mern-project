import { useState } from 'react';
import axios from "axios";
import './login.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

export const Login = () => {

    const [user, setUser] = useState({
        email:"",
        password:"",
    });

    const navigate = useNavigate();
    const { storeTokenInLs, API } = useAuth();

    const handleinput = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name] : value,
        });
    };

    const handlesubmit = async (e) => {

        e.preventDefault();
        console.log(user);

        try {
            
            // const response = await axios.post("http://localhost:5000/api/auth/login", user, {
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // });
            
            const response = await fetch(`${API}/api/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(user),
            });

            const res_data = await response.json();
            console.log(res_data);
            
            if(response.ok){
                setUser({
                    email:"",
                    password:"",
                })
                navigate("/");
                setInterval(() => {
                    window.location.reload();
                  }, 1000);  
                toast.success("login successfully done");
            }else{
                toast.error(res_data.message);
            }
            // localStorage.setItem("token", res_data.token);
            storeTokenInLs(res_data.token);

        } catch (error) {
            console.log(error);
        }

    }

    return(
        
        <>

            <div className="login-container">
                <div className="login-image">
                    <img 
                        src="/images/final login.png" 
                        alt="something about login page ui"
                        height={400}
                        width={400}
                    />
                </div>

                <div className='login-form'>

                    <div className='title-login'>
                        <h1>Hello, Welcome to login</h1>
                    </div>

                    <br />

                    <form onSubmit={handlesubmit}>
                        <div className='input-login'>
                            <label htmlFor='email'>Email : </label>
                            <input 
                                type='email' 
                                name='email' 
                                id='email'
                                required
                                placeholder='enter your email'
                                onChange={handleinput} 
                            />
                        </div>
                        <div className='input-login'>
                            <label htmlFor='password'>Password : </label>
                            <input 
                                type='password' 
                                name='password' 
                                id='password'
                                required
                                placeholder='enter your password'
                                onChange={handleinput} 
                            />
                        </div>

                        <br />

                        <button type='submit' className='submit-but'>Login now</button>

                    </form>
                </div>
            </div>
        </>
    );
};