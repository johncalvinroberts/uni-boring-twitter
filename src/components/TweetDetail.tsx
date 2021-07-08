import React, { Suspense, useEffect } from 'react';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import { PageLoadingPlaceholder } from './Loading';

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
  return <div>tweet detail: {data.id}</div>;
};

const TweetDetailOuter = (props: Props) => {
  return (
    <Suspense fallback={<PageLoadingPlaceholder />}>
      <TweetDetail {...props} />
    </Suspense>
  );
};

export default TweetDetailOuter;
