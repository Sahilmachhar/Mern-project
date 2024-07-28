import { useEffect, useState } from 'react';
import './contact.css'
import { useAuth } from '../store/auth';

export const Contact = () => {

    const [contact, setContact] = useState({
        username:"",
        email:"",
        message:"",
    })

    const [newuser, setNewuser] = useState(true);
    const { user, API } = useAuth();

    // console.log(user);

        if (user && newuser) {
            setContact({
                username: user.username,
                email: user.email,
                message: "",
            });

            setNewuser(false);
        }


    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name] : value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(user);

        try {
            
            const response = await fetch(`${API}/api/form/contact`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact)
            })

            if(response.ok){
                alert("msg send successfully");
                const data = response.json();
                console.log(data);
                setContact({
                    message:""
                });
            }
            
        } catch (error) {
            alert("msg not send");
            console.log(error);
        }
    }

    return(
        
        <>
            <div className="contact-container grid grid-two-cols">
                <div className='contact-area'>

                    <div className='title-contact'>
                        <h1>Contact us here</h1>
                    </div>

                    <form onSubmit={handleSubmit} className='form-contact'>
                        <div className='input-con'>
                            <label htmlFor='username'>Username : </label>
                            <input 
                                type="text"
                                name='username'
                                id='username'
                                placeholder='username'
                                value={contact.username}
                                onChange={handleInput}
                            />
                        </div>
                        <div className='input-con'>
                            <label htmlFor='email'>Email : </label>
                            <input 
                                type="email"
                                name='email'
                                id='email'
                                placeholder='enter your email'
                                value={contact.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div className='input-con'>
                            <label htmlFor='message'>Message : </label>
                            <textarea 
                                name='message'
                                id='message'
                                cols={20}
                                rows={5}
                                placeholder='tell us about ur query'
                                value={contact.message}
                                onChange={handleInput}
                                ></textarea>
                        </div>

                        <br />

                        <button type='submit' className='submit-but'>Submit</button>
                    </form>
                </div>

                <div className='contact-image'>
                    <img 
                        src='/images/contact2.webp'
                        alt='image about contact'
                        height={500}
                        width={600}
                    />
                </div>

            </div>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4973993967487!2d72.62634057509705!3d23.188536979057876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c9618d2c5%3A0xc54de484f986b1fa!2sDA-IICT!5e0!3m2!1sen!2sin!4v1721817910471!5m2!1sen!2sin" width="1518" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </>
    );
};