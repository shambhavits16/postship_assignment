import { Link } from '@shopify/polaris';
import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, PersonIcon, SearchIcon, SettingsIcon } from '@shopify/polaris-icons';

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Orders', href: '#' },
  { label: 'Integrations', href: '#' },
  { label: 'Tracking Page', href: '#', hasDropdown: true },
  { label: 'Partner with Us', href: '#' },
];

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center bg-white px-20 py-2 w-full h-16 border-b-[1px] border-[#8A8A8A]">
      {/* Left side */}
      <div className="flex space-x-6">
        {navLinks.map((l, i) => (
          <div key={i} className="flex items-center">
            <Link
              url={l.href}
              monochrome={i !== 0}
              removeUnderline
            >
              <span className={`text-sm font-medium ${i === 0 ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-700'
                }`}>
                {l.label}
              </span>
            </Link>
            {l.hasDropdown && (
              <button onClick={toggleDropdown} className="ml-1 focus:outline-none">
                {isDropdownOpen ? (
                  <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                )}
              </button>
            )}
          </div>
        ))}
      </div>
      {/* Right side */}
      <div className="flex space-x-6 items-center">
        <div className="flex items-center space-x-2">
          <SearchIcon className="w-5 h-5 text-gray-500"/>
          <input
            type="text"
            placeholder="Search"
            className="border-b border-gray-300 focus:outline-none focus:border-gray-600 text-gray-800" />
        </div>
        <div className="flex items-center space-x-2">
          <PersonIcon className="w-5 h-5 text-gray-500"/>
          <span className="text-gray-800">Account</span>
        </div>
        <div className="flex items-center space-x-2">
          <SettingsIcon className="w-5 h-5 text-gray-500"/>
          <span className="text-sm text-gray-800">Settings</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar