import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";

export const GetContact = () => {

    const [contact, setContact] = useState([]);
    const { authorizationToken, API } = useAuth();

    const getContact = async () => {

        try {
            
            const response = await fetch(`${API}/api/form/contact-data`,{
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            });

            const data = await response.json();
            console.log(data);

            if(response.ok){
                setContact(data);
            }

        } catch (error) {
            toast.error("Error getting contacts");
            console.log(error);
        }
    }

    const deleteContact = async (id) => {

        try {
            
            const response = await fetch(`${API}/api/form/contact-delete/${id}`,{
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken
                }
            });

            const data = await response.json();
            console.log(data);

            if(response.ok){
                toast.success(data.message);
                getContact();
            }
        } catch (error) {
            console.log(error);
            toast.error("Error deleting contact");
        }

    }

    useEffect(() => {
        getContact();
    }, []);

    return(
        <>
            <section>
                <div className="container title-services">
                    <h2>User contact details</h2>
                </div>

                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contact.map((currUser, index) => {
                                return(
                                <tr key={index}>
                                    <td>{currUser.username}</td>
                                    <td>{currUser.email}</td>
                                    <td>{currUser.message}</td>
                                    <td><button onClick={ () => deleteContact(currUser._id) } className='submit-but'>Delete</button></td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}