import { Link } from '@shopify/polaris';
import React from 'react'
import { ChevronDownIcon } from '@shopify/polaris-icons';

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
  return (
    <div className="flex justify-between items-center bg-white px-4 py-2 shadow-md">
      {/* Left side */}
      <div className="flex space-x-6">
        {navLinks.map((l, i) => (
          <span
            key={i}
            className="text-gray-800 font-medium flex items-center"
          >
            <Link url={l.href} removeUnderline monochrome>
              {l.label}
            </Link>
            {l.hasDropdown && <ChevronDownIcon className="ml-1" fontSize={15}/>}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Navbar