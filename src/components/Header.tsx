/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'wouter';
import Crane from '../assets/favicon.svg';
import { useTitle } from '../hooks';

const Header = () => {
  const title = useTitle();
  return (
    <nav
      css={css`
        background-color: var(--blue);
        padding: var(--xs) var(--sm);
        position: sticky;
        top: 0;
        z-index: 10;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .logo {
          list-style-type: none;
        }
        img {
          width: 2.7rem;
          height: 2.7rem;
          z-index: 100;
          transition: box-shadow 0.2s ease-in-out;
          border-radius: 2px;
          &:hover {
            box-shadow: 4px 4px 0 var(--accent);
          }
        }
        h3 {
          padding-left: var(--sm);
          width: 150px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      `}
    >
      <Link href="/" className="logo">
        <a title="Home">
          <img src={Crane} alt="Cool crane logo" />
        </a>
      </Link>
      {/* TODO: More nav items here */}
      <h3>{title}</h3>
    </nav>
  );
};

export default Header;
