import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { About } from "./pages/about";
import { Services } from "./pages/services";
import { Register } from "./pages/register";
import { Contact } from "./pages/contact";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import ErrorPage from "./pages/error";
import { Logout } from "./pages/logout";
import { AdminLayout } from "./components/layout/adminlayout";
import { GetUsers } from "./pages/Admin-users";
import { GetContact } from "./pages/Admin-contact";
import { AdminUpdate } from "./pages/Admin-update";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />

        {/* Admin routes */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="users" element={<GetUsers />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
          <Route path="contacts" element={< GetContact/>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
