// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 border-b border-slate-200">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "font-bold" : "text-slate-400"
        }
      >
        首頁
      </NavLink>
      <NavLink
        to="/works"
        className={({ isActive }) =>
          isActive ? "font-bold" : "text-slate-400"
        }
      >
        作品
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "font-bold" : "text-slate-400"
        }
      >
        關於我
      </NavLink>
    </nav>
  );
}
