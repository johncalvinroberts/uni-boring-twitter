import { css } from '@emotion/react';

const Header = () => {
  return (
    <nav
      css={css`
        background-color: var(--blue);
        padding: var(--sm);
      `}
    >
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
