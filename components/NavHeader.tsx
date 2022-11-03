import React from 'react';

type HeaderProps = {
  title: string;
  metaDescription: string;
  navigationItems: string[];
  navigationItemLinks: string[];
};

const NavHeader = ({
  title,
  metaDescription,
  navigationItems,
  navigationItemLinks,
}: HeaderProps) => {
  console.log(title);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">{title}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <a href={navigationItemLinks[index]}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavHeader;
