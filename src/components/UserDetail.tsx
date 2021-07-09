/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, Suspense } from 'react';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import { PageLoadingPlaceholder } from './Loading';
import TweetList from './TweetList';
import { useTitle } from '../hooks';

interface Props {
  id: number | string;
}

const UserDetail = (props: Props) => {
  const { id } = props;
  const { data, error } = useSWR<User>(`users/${id}`);

  useTitle(data?.name);

  useEffect(() => {
    if (error) {
      toast.error(error.message ?? 'Something went wrong');
    }
  }, [error]);

  if (!data) {
    return null;
  }

  return (
    <div
      css={css`
        h1 {
          padding-bottom: var(--sm);
        }
        a {
          cursor: alias;
        }
        ul {
          list-style: ethiopic-halehame;
          padding-left: 2rem;
        }
      `}
    >
      <h1>{data.name}</h1>
      <ul>
        <li>
          <strong>Email: </strong>
          {data.email}
        </li>
        <li>
          <strong>Phone: </strong>
          {data.phone}
        </li>
        <li>
          <strong>Website: </strong>
          <a href={data.website} rel="noreferrer noopener">
            {data.website}
          </a>
        </li>
      </ul>
      <TweetList userId={id} />
    </div>
  );
};

const UserDetailOuter = (props: Props) => {
  return (
    <Suspense fallback={<PageLoadingPlaceholder />}>
      <UserDetail {...props} />
    </Suspense>
  );
};

export default UserDetailOuter;
