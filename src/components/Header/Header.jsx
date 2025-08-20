import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ];
  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black shadow-lg border-b border-yellow-500/40">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Logo width="70px" />
            </Link>
          </div>

          {/* Navigation Menu */}
          <ul className="flex items-center space-x-8">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className="relative text-gray-300 font-medium hover:text-yellow-400 transition-colors duration-300 
                           after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-400 after:left-0 after:-bottom-1 
                           after:transition-all after:duration-300 hover:after:w-full"
                    onClick={() => navigate(item.slug)}
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
