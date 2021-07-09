/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Suspense, useEffect } from 'react';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import { MultiLineLoading } from './Loading';
import CommentInlineDetail from './CommentInlineDetail';

interface Props {
  tweetId: string;
}

const COMMENT_HEIGHT = '5rem';

const CommentList = (props: Props) => {
  const { tweetId } = props;
  const { data, error } = useSWR<Comment[]>(`posts/${tweetId}/comments`);

  useEffect(() => {
    if (error) {
      toast.error(error.message ?? 'Something went wrong');
    }
  }, [error]);
  // return null if no comments yet
  // loading indicator handled by suspense
  if (!data) {
    return null;
  }
  return (
    <div>
      {data.map((item) => (
        <CommentInlineDetail comment={item} key={item.id} />
      ))}
    </div>
  );
};

const CommentListOuter = (props: Props) => {
  return (
    <Suspense
      fallback={
        <MultiLineLoading
          lines={10}
          css={css`
            > div {
              height: ${COMMENT_HEIGHT};
            }
          `}
        />
      }
    >
      <CommentList {...props} />
    </Suspense>
  );
};

export default CommentListOuter;
