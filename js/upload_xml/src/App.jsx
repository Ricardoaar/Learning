import { useState } from "react";

import "./App.css";

function base64ToXml(base64Data) {
  const binaryData = atob(base64Data);
  const textDecoder = new TextDecoder();
  const plainText = textDecoder.decode(new Uint8Array([...binaryData].map(c => c.charCodeAt(0))));
  return plainText;
}


function FileInput({ onChange }) {
  const [base64String, setBase64String] = useState("");

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const entry = event.target.result;

      const regex = /^data:text\/xml;base64,([a-zA-Z0-9+/=]+)$/;
      const [, base64] = entry.match(regex);
      setBase64String(base64);
      onChange(base64);
    };


    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      <p>Base64 string: {base64String}</p>
    </div>
  );
}


function App() {
  const [base64, setBase64] = useState(null);
  const [xml, setXMl] = useState();


  const translateToXml = () => {
    if (!base64) return;
    setXMl(base64ToXml(base64));
  };
  const onFileInputChange = (value) => {
    setBase64(value);
  };


  return (
    <>
      <FileInput onChange={onFileInputChange} />
      <button onClick={translateToXml} disabled={!base64}>
        To xml
      </button>
      {xml && <span>
        {xml}
      </span>}

    </>
  );
}

export default App;
