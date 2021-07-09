/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Crane from '../assets/crane.svg';

export const PageLoadingPlaceholder = () => {
  return (
    <div
      css={css`
        min-width: 400px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100%;
        img {
          width: 200px;
        }
        // some silly floating animation
        @keyframes floating {
          0% {
            transform: translate(0, 0px) rotateY(-12deg);
          }

          65% {
            transform: translate(0, 10px) rotateY(10deg) rotateX(10deg);
          }
          100% {
            transform: translate(0, 0px) rotateY(-12deg);
          }
        }

        .sun {
          background-color: var(--accent);
          animation: floating 8s ease-in-out infinite;
          width: 120px;
          height: 120px;
          border-radius: 100%;
          position: absolute;
          transition: opacity 0.2s ease;
          &:hover {
            opacity: 0.9;
          }
        }
      `}
    >
      <span className="sun" />
      <img src={Crane} alt="Cool crane logo" />
    </div>
  );
};

export const InlinePlaceholder = ({ className }: { className?: string }) => {
  return (
    <div
      {...(className ? { className } : '')}
      css={css`
        width: 100%;
        border-bottom: solid 1px var(--accent);
        animation: floating 8s ease-in-out infinite;
      `}
    />
  );
};

export const MultiLineLoading = ({
  lines,
  className,
}: {
  lines: number;
  className?: string;
}) => {
  return (
    <div {...(className ? { className } : '')}>
      {Array.from({ length: lines }, (_, i) => (
        <InlinePlaceholder key={i} />
      ))}
    </div>
  );
};
