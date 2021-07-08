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
        padding: var(--sm) 0;
        display: flex;
        .arrow {
          opacity: 0;
          transition: opacity 0.1s;
        }
        &:hover {
          opacity: 1;
          .arrow {
            opacity: 1;
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
          /* display: inline-flex; */
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
      <Link href={`t/${tweet.id}`} title="View Tweet">
        <div className="title-box">
          <h3>{tweet.title}</h3>
          <div className="arrow">→</div>
        </div>

        <p>{tweet.body}</p>
      </Link>
    </div>
  );
};

export default TweetInlineDetail;
