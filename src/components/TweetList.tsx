/** @jsx jsx */
import { Suspense, useEffect } from 'react';
import { jsx } from '@emotion/react';
import useSWR, { mutate } from 'swr';
import { toast } from 'react-toastify';
import TweetInlineDetail from './TweetInlineDetail';
import { PageLoadingPlaceholder } from './Loading';

interface Props {
  userId?: number | string;
}

const TweetList = (props: Props = {}) => {
  const { userId } = props;
  const { data = [], error } = useSWR<Tweet[]>(
    `posts${userId ? `?userId=${userId}` : ''}`
  );

  // handle errors - notify with toast
  useEffect(() => {
    if (error) {
      toast.error(error.message ?? 'Something went wrong');
    }
  }, [error]);

  // prime the cache for navigating to detail page
  useEffect(() => {
    for (const tweet of data) {
      mutate(`posts/${tweet.id}`, tweet);
    }
  }, [data]);

  return (
    <div aria-label="Timeline of tweets">
      {data.map((item) => (
        <TweetInlineDetail tweet={item} key={item.id} />
      ))}
    </div>
  );
};

const TweetListOuter = (props: Props) => {
  return (
    <Suspense fallback={<PageLoadingPlaceholder />}>
      <TweetList {...props} />
    </Suspense>
  );
};

export default TweetListOuter;
