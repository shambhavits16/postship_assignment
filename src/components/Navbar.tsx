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
  const [selectedTab, setSelectedTab] = useState("Home");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTabClick = (label: string) => {
    setSelectedTab(label);
  };


  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-white px-20 py-2 w-full h-16 border-b-[1px] border-[#8A8A8A]">
      {/* Left side */}
      <div className="flex space-x-6">
        {navLinks.map((l, i) => (
          <div key={i} className="flex items-center hover:no-underline">
            <span
              onClick={() => handleTabClick(l.label)}
              className={`text-sm font-semibold cursor-pointer ${selectedTab === l.label
                ? "border-b-2 border-[#8051FF]"
                : "text-[#4A4A4A]"
                } hover:no-underline`}
              style={{ display: "inline-block" }}
            >
              {l.label}
            </span>
            {l.hasDropdown && (
              <button onClick={toggleDropdown} className="ml-0 focus:outline-none">
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
        <div className="relative">
          <SearchIcon className="absolute w-5 h-5 text-[#4A4A4A]" />
          <input
            type="text"
            placeholder="Search"
            className="w-[120px] pl-8 pr-4 text-sm font-normal border-b border-[#4A4A4A] focus:outline-none focus:border-gray-600 text-[#616161]" />
        </div>
        <div className="flex items-center space-x-1">
          <PersonIcon className="w-5 h-5 text-[#4A4A4A]" />
          <span className="text-sm font-semibold text-[#616161]">Account</span>
        </div>
        <div className="flex items-center space-x-1">
          <SettingsIcon className="w-5 h-5 text-[#4A4A4A]" />
          <span className="text-sm font-semibold text-[#616161]">Settings</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar