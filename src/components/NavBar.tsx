import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Search', href: '/' },
  { name: 'Submission', href: '/submission' },
  { name: 'Trends', href: '/trends' },
  { name: 'Resources', href: '/resources' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" style={{ backgroundColor: '#c5050c' }}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          <div className="flex-shrink-0">
            <img
              src="../badger_shield.png" 
              alt="Logo"
              className="h-20 w-20" 
            />
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href
                        ? 'bg-white text-red-800' // White background with red text for active link
                        : 'text-white hover:bg-red-700 hover:text-white', // Hover effect with darker red
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              className={classNames(
                location.pathname === item.href
                  ? 'bg-white text-red-800' // White background with red text for active link
                  : 'text-white hover:bg-red-700 hover:text-white', // Hover effect with darker red
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
