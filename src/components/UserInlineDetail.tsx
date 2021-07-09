/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useEffect, Suspense } from 'react';
import useSWR from 'swr';
import { Link } from 'wouter';
import { toast } from 'react-toastify';
import { InlinePlaceholder } from './Loading';

interface Props {
  id: string;
  className?: string;
}

const USER_INLINE_HEIGHT = '2rem';

const UserInlineDetail = (props: Props) => {
  const { id, className } = props;
  const { data, error } = useSWR<User>(`users/${id}`);

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
    <Link
      className={className}
      href={`/users/${id}`}
      css={css`
        color: currentColor;
        text-decoration: none;
        height: ${USER_INLINE_HEIGHT};
        border-bottom: solid 1px var(--muted);
        .arrow {
          opacity: 0;
          transition: all 0.1s ease;
        }
        &:hover {
          .arrow {
            opacity: 1;
            padding-left: 10px;
          }
        }
      `}
    >
      <em>Author: {data.name}</em>
      <span className="arrow">→</span>
    </Link>
  );
};

const UserInlineDetailOuter = (props: Props) => {
  return (
    <Suspense
      fallback={
        <InlinePlaceholder
          css={css`
            height: ${USER_INLINE_HEIGHT};
          `}
        />
      }
    >
      <UserInlineDetail {...props} />
    </Suspense>
  );
};

export default UserInlineDetailOuter;
