import React from 'react';

interface Props {
  id: string;
}

const UserDetail = (props: Props) => {
  return <div>user:{props.id}</div>;
};

export default UserDetail;
