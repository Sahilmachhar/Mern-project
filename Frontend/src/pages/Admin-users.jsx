import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const GetUsers = () => {

    const { authorizationToken, API } = useAuth();
    const [user, setUser] = useState([]);

    const getAllUsers = async() => {

        try {
            
            const response = await fetch(`${API}/admin/users`,{
                method: "GET",
                headers:{
                    Authorization: authorizationToken
                }
            })

            const data = await response.json();
            console.log(`users data ${data}`);

            setUser(data);

        } catch (error) {
            console.log(error);
        }
    };

    const deleteUser = async (id) => {

        try {
            
            const response = await fetch(`${API}/admin/users/delete/${id}`,{
                method: "DELETE",
                headers:{
                    Authorization: authorizationToken
                }
            })

            const data = await response.json();
            console.log(data);

            if(response.ok){
                toast.success(data.message);
                getAllUsers();
            }

        } catch (error) {
            console.log(error);
            toast.error("Error deleting user");
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <>
            <section>

                <div className="container title-services">
                    <h1>All users data</h1>
                </div>

                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((currUser, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{currUser.username}</td>
                                        <td>{currUser.email}</td>
                                        <td>{currUser.phone}</td>
                                        <td><Link to={`/admin/users/${currUser._id}/edit`} className="no-underline">Edit</Link></td>
                                        <td><button onClick={() => deleteUser(currUser._id)} className="submit-but">Delete</button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}