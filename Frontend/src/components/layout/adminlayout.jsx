import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCommentDots, faHandHoldingHand, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {

  const { user, isLoading } = useAuth();

  if(isLoading){
    return <h1>Loading ...</h1>
  }

  if(!user.isAdmin){
    return <Navigate to="/" />
  }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users" className="nav-link">
                    <FontAwesomeIcon icon={faUsers} /> Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts" className="nav-link">
                    <FontAwesomeIcon icon={faCommentDots} /> Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="nav-link">
                    <FontAwesomeIcon icon={faHandHoldingHand} /> Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link">
                    <FontAwesomeIcon icon={faHouse} /> Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
