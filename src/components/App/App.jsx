import React, { useState } from 'react';

export default function App() {
  const [newUri, setNewUri] = useState('');
  const [uriArray, setUriArray] = useState(['']);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUriArray(uriArray.concat(newUri));
  };

  const handleChange = ({ target }) => {
    setNewUri(target.value);
  };

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" onChange={e => handleChange(e)}></input>
        <input type="submit"></input>
      </form>
      <ul>
        {
          uriArray.map((uri, i) => <li key={i}>{uri}</li>)
        }
      </ul>
    </>
  );
}
