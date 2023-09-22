import React from 'react';

function Breadcrumb({ breadcrumbs }) {
  return (
    <div className="text-sm breadcrumbs bg-white px-28">
      {/* <ul>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            {breadcrumb.link ? (
              <a href={breadcrumb.link}>{breadcrumb.text}</a>
            ) : (
              breadcrumb.text
            )}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Breadcrumb;
