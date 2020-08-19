import React, { useState } from 'react';
import { useSocket } from 'react-socket-io-hooks';

export default function App() {
  const socket = useSocket();
  const [newUri, setNewUri] = useState('');
  const [uriArray, setUriArray] = useState(['']);

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit('get uri', newUri);

    socket.on('got uri', allUris => setUriArray(allUris));
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
