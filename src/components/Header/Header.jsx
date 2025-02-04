import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="bg-[#050c40] shadow-lg py-4">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/">
              <Logo width="80px" />
            </Link>
          </div>

          {/* Navigation Menu */}
          <ul className="flex space-x-8 text-white font-semibold text-lg">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-6 py-3 rounded-lg transition-colors duration-200 hover:bg-blue-500 hover:text-white"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {/* Logout Button */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
