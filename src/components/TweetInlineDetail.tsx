/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'wouter';

interface Props {
  tweet: Tweet;
}
const TweetInlineDetail = (props: Props) => {
  const { tweet } = props;
  return (
    <div
      css={css`
        opacity: 0.8;
        color: var(--text);
        padding: var(--sm);
        display: flex;
        transition: box-shadow 0.1s ease;
        .arrow {
          opacity: 0;
          transition: all 0.1s ease;
          width: 0;
        }
        &:hover {
          opacity: 1;
          box-shadow: 4px 4px 0px var(--accent);
          .arrow {
            opacity: 1;
            width: auto;
          }
        }
        a {
          color: currentColor;
          text-decoration: none;
        }
        h3 {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 300px;
        }
        p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .title-box {
          display: flex;
        }
      `}
    >
      <Link href={`/t/${tweet.id}`} title="View Tweet">
        <div className="title-box">
          <h3>{tweet.title}</h3>
          <span className="arrow">→</span>
        </div>
        <p>{tweet.body}</p>
      </Link>
    </div>
  );
};

export default TweetInlineDetail;
