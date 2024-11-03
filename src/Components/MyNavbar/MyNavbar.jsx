import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { MdCancel } from "react-icons/md";


const MyNavbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  return (
    <nav>
      <div className="pl-6 p-2 text-2xl md:hidden bg-primary" onClick={() => setOpen(!open)}>
        {
            open === !true ? <RiMenu2Line/> : <MdCancel/>

        }
        
      </div>

      <ul className={`ml-6 md:flex justify-center px-6 py-2 rounded-xl absolute md:static bg-red-600 md:bg-transparent  z-10 duration-1000 ${open ? 'top-8' : '-top-60'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default MyNavbar;
