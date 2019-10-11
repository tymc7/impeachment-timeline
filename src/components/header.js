import React    from 'react';
import { Link } from 'gatsby';


export default function Header({ siteTitle }) {
  return (
    <header
      style={{
        background: `#B71C1C`,
        marginBottom: `1.45rem`
      }}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1rem`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <h1 style={{ margin: 0, fontSize: '1rem' }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}>
            {siteTitle}
          </Link>
        </h1>
        <Link to="/about" style={{ color: `white`, textDecoration: `none`, fontFamily: 'sans-serif' }}>
          About
        </Link>
      </div>
    </header>
  );
}
