import React from 'react';
import { Global, css } from '@emotion/react';

// turn an object into css variables
const varify = (obj: Record<string, any>) =>
  Object.keys(obj).map((key) => `--${key}: ${obj[key]};`);

// breakpoints
const breakpoints = [576, 768, 992, 1200];

// media query helper
export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

// theme
export const theme = {
  colors: {
    blue: `#2CCCE1`,
    accent: '#FFAFF7',
    background: `hsl(210, 50%, 96%)`,
    muted: `hsla(0, 1%, 10%, 1)`,
    error: `#ff4c4c`,
    text: ``,
  },
  fonts: {
    body: `courier,monospace`,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
  },
  space: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.4rem',
    lg: '2rem',
    xl: '2.5rem',
  },
};

const Style = (): JSX.Element => {
  const styles = css`
    html {
      font-size: 16px;
      background-color: var(--blue);
    }
    * {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
    }
    :root {
      ${varify(theme.colors)}
      ${varify(theme.space)}
    }
    ::selection {
      background: var(--muted);
      color: var(--background);
    }
    body {
      background-color: var(--background);
      font-family: ${theme.fonts.body};
      font-size: var(--med);
      color: var(--text);
    }
  `;
  return <Global styles={styles} />;
};

export default Style;
