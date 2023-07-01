import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const CaesarCipher = () => {
  const [text, setText] = useState('');
  const [shift, setShift] = useState(0);
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleEncrypt = () => {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-z]/i)) {
        const code = text.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      encrypted += char;
    }
    setEncryptedText(encrypted);
  };

  const handleDecrypt = () => {
    let decrypted = '';
    for (let i = 0; i < decryptedText.length; i++) {
      let char = decryptedText[i];
      if (char.match(/[a-z]/i)) {
        const code = decryptedText.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        }
      }
      decrypted += char;
    }
    setDecryptedText(decrypted);
  };

  const handleClear = () => {
    setText('');
    setShift(0);
    setEncryptedText('');
    setDecryptedText('');
  };

  return (
    <div className="container">
      <div className="overlay"></div>
      <h2 style={{ fontFamily: 'Shadows Into Light' }}>
        <span className="title-word">Criptografia</span>
      </h2>
      <div>
        <label htmlFor="text">TEXTO:</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite para ser criptografado"
        />
      </div>
      <div>
        <label htmlFor="shift">DESLOCAMENTO:</label>
        <div className="shift-container">
          <input
            type="number"
            id="shift"
            value={shift}
            onChange={(e) => setShift(Number(e.target.value))}
            placeholder="Digite uma Senha de Numeros aqui"
            className="shift-input"
          />
          <div className="info-icon">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span className="tooltip">
              Informe um valor inteiro para definir o deslocamento.
            </span>
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleEncrypt}>Criptografar</button>
        <button onClick={handleDecrypt}>Descriptografar</button>
        <button onClick={handleClear}>Limpar</button>
      </div>
      <div>
        <label htmlFor="encryptedText">Texto criptografado:</label>
        <input
          type="text"
          id="encryptedText"
          value={encryptedText}
          readOnly
        />
      </div>
      <div>
        <label htmlFor="decryptedInput">Digite a mensagem criptografada:</label>
        <input
          type="text"
          id="decryptedInput"
          value={decryptedText}
          onChange={(e) => setDecryptedText(e.target.value)}
          placeholder="Digite a mensagem criptografada"
        />
        <button onClick={handleDecrypt}>Descriptografar</button>
      </div>
    </div>
  );
};

export default CaesarCipher;
