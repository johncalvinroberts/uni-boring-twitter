/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Suspense, useEffect } from 'react';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import { PageLoadingPlaceholder } from './Loading';
import UserInlineDetail from './UserInlineDetail';
import CommentList from './CommentList';

interface Props {
  id: string;
}

const TweetDetail = (props: Props) => {
  const { id } = props;
  const { data, error } = useSWR<Tweet>(`posts/${id}`);

  useEffect(() => {
    if (error) {
      toast.error(error.message ?? 'Something went wrong');
    }
  }, [error]);
  // return null if no tweet
  // loading indicator handled by suspense
  if (!data) {
    return null;
  }

  return (
    <article
      css={css`
        display: flex;
        flex-wrap: wrap;
        .user {
          flex: 0 0 100%;
        }
        h1 {
          padding-top: var(--lg);
          padding-bottom: var(--sm);
        }
        p {
        }
        hr {
          border: solid 1px var(--muted);
          margin: var(--lg) 0;
          flex: 0 0 100%;
        }
        .comments {
          flex: 0 0 100%;
        }
      `}
    >
      <UserInlineDetail id={data.userId} className="user" />
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <hr />
      <h3>Comments</h3>
      <div className="comments">
        <CommentList tweetId={id} />
      </div>
    </article>
  );
};

const TweetDetailOuter = (props: Props) => {
  return (
    <Suspense fallback={<PageLoadingPlaceholder />}>
      <TweetDetail {...props} />
    </Suspense>
  );
};

export default TweetDetailOuter;
