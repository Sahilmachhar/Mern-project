import { useState } from 'react';
import './register.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

export const Register = () => {

    const [user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
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
        })
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            
            const response = await fetch(`${API}/api/auth/register`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(user),
        });
        
        const res_data = await response.json();
        console.log(res_data.message);

        if(response.ok){
            setUser({
                username:"",
                email:"",
                phone:"",
                password:"",
            });
            navigate("/login");
            toast.success("Registration successfully done !");

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
            <div className="register-container">
                <div className="image-container">
                    <img 
                        src="/images/register image.png" 
                        alt="There something about registration page"
                        width={500}
                        height={500}    
                    />
                </div>

                <div className='register-form'>

                    <div className='title-register'>
                        <h1>Registaration form</h1>
                    </div>

                    <br/>

                    <form onSubmit={handlesubmit}>
                        <div className='input-reg'>
                            <label htmlFor='username'>Username : </label>
                            <input 
                                type='text' 
                                name='username' 
                                id='username'
                                placeholder='username'
                                value={user.username}
                                onChange={handleinput}
                            />
                        </div>
                        <div className='input-reg'>
                            <label htmlFor='email'>Email : </label>
                            <input 
                                type='email' 
                                name='email' 
                                id='email'
                                placeholder='enter your email'
                                value={user.email}
                                onChange={handleinput}
                            />
                        </div>
                        <div className='input-reg'>
                            <label htmlFor='number'>Phone : </label>
                            <input 
                                type='number' 
                                name='phone' 
                                id='phone'
                                placeholder='enter phone'
                                value={user.phone}
                                onChange={handleinput}
                            />
                        </div>
                        <div className='input-reg'>
                            <label htmlFor='username'>Password : </label>
                            <input 
                                type='password' 
                                name='password' 
                                id='password'
                                placeholder='password'
                                value={user.password}
                                onChange={handleinput}
                            />
                        </div>

                        <br />

                        <button type='submit' className='submit-but'>Register now</button>
                    </form>
                </div>
            </div>
        </>
    );
};