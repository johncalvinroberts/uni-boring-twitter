/** @jsx jsx */
import { jsx, css } from '@emotion/react';

interface Props {
  comment: Comment;
  className?: string;
}

const CommentInlineDetail = (props: Props) => {
  const { comment, className } = props;
  return (
    <div
      {...(className ? { className } : '')}
      css={css`
        padding: var(--sm);
        font-size: var(--xs);
        .quote {
          font-size: var(--lg);
          line-height: 0;
        }
        small {
          padding: var(--xs) var(--sm);
          text-align: right;
          width: 100%;
          display: block;
        }
      `}
    >
      <p>
        <span className="quote">&quot;</span>
        {comment.body}
      </p>
      <small>- {comment.email}</small>
    </div>
  );
};

export default CommentInlineDetail;
