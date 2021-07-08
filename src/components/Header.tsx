/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'wouter';
import Crane from '../assets/favicon.svg';

const Header = () => {
  return (
    <nav
      css={css`
        background-color: var(--blue);
        padding: var(--xs) var(--sm);
        position: sticky;
        top: 0;
        z-index: 10;
        ul {
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
      `}
    >
      <ul>
        <li>
          <Link href="/">
            <a title="Home">
              <img src={Crane} alt="Cool crane logo" />
            </a>
          </Link>
        </li>
        {/* TODO: More nav items here */}
      </ul>
    </nav>
  );
};

export default Header;
