/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const Footer = () => {
  return (
    <footer
      css={css`
        padding: 0 var(--md);
      `}
    >
      <small>© {new Date().getFullYear()} - nosuchthing, inc.</small>
    </footer>
  );
};

export default Footer;
