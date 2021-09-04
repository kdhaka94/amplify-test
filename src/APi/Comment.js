import React from 'react';

export default function CustomComment({ data, id }) {
  console.log({ data, id });
  return (
    <div key={id}>
      <h1>{data}</h1>
    </div>
  );
}
