import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function App() {
  const [url, setUrl] = useState('');

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <div>
      <h1>Gerador de QR Code</h1>
      <input type="text" value={url} onChange={handleInputChange} />
      <br />
      {url && <QRCode value={url} />}
    </div>
  );
}

export default App;
