import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const AdminUpdate = () => {

    const [user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
    });

    const { authorizationToken, API } = useAuth();
    const params = useParams();

    const getUser = async () => {

        try {
            
            const response = await fetch(`${API}/admin/users/${params.id}`,{
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            })
            
            const data = await response.json();
            // console.log(data);

            if(response.ok){
                setUser(data);
            }

        } catch (error) {
            console.log(error);
            toast.error("Error fetching user data");
        }
    }

    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name] : value,
        });

    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        // console.log(user);

        try {
            
            const response = await fetch(`${API}/admin/users/update/${params.id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken
                },
                body: JSON.stringify(user),
            })

            const data = await response.json();
            console.log(data);

            if(response.ok){
                toast.success("data Updated successfully");
            }
            
        } catch (error) {
            console.log(error);
            toast.error("Error updating user data");
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return(
        <>
            <section>
                <div className="container title-services">
                    <h1>Update user details</h1>
                </div>

                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="input-con">
                            <label htmlFor="username">Username : </label>
                            <input 
                                id="username"
                                name="username"
                                type="string"
                                placeholder="username"
                                value={user.username}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="input-con">
                            <label htmlFor="email">Email : </label>
                            <input 
                                id="email"
                                name="email"
                                type="email"
                                placeholder="enter your email"
                                value={user.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="input-con">
                            <label htmlFor="phone">Phone : </label>
                            <input 
                                id="phone"
                                name="phone"
                                type="number"
                                placeholder="number"
                                value={user.phone}
                                onChange={handleInput}
                            />
                        </div>
                        <br />
                        <button type="submit" className='submit-but' >Update</button>
                    </form>
                </div>
            </section>
        </>
    );
} 