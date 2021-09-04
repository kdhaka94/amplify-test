import axios from 'axios';
import React from 'react';
import CustomComment from './Comment';

export default function ApiExample() {
  

  console.log({ data });
  return (
    <div>
      {data.map((comment) => (
        <CustomComment data={comment.body} id={comment.id} />
      ))}
    </div>
  );
}
