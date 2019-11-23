import React from 'react';


export default function Link({ href, children }) {
  const isExternal = href.startsWith('http');

  if (isExternal)
    return (<a href={href} target="_blank" rel="noopener noreferrer">{children}</a>);
  else
    return (<a href={href}>{children}</a>);
}