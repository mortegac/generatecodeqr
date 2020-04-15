import React, {useState} from 'react';
import { useQrEncode, useQrDecode } from 'react-qr-hooks';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import './App.css';

function App() {

  const [textQr, setTextQr] = useState('Texto QR');
  const encoded = useQrEncode(textQr, /* object with options (if needed) */);

  const decoded = useQrDecode(encoded, /* object with options (if needed) */);

//  const handleSubmit = (evt) => {
//       evt.preventDefault();
//       alert(`Submitting Name ${textQr}`);
      
//       const encoded = useQrEncode(textQr, /* object with options (if needed) */);

//   }

  return (
    <div className="App">
      <header className="App-header">
        
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-5by">
                <img 
                  src={encoded} 
                  alt="My QR code" 
                  width={300}
                  height={300}
                />

                <figcaption>{decoded}</figcaption>

              </figure>
            </div>
            <div className="media-content">
              <div className="content">
              <div className="field">
                  <label className="label is-small">Ingrese el Texto para generar su QR</label>
                  <div className="control has-icons-left">
                    <input 
                      className="input is-focused is-large" 
                      type="text" 
                      placeholder="Text input"
                      value={textQr}
                      onChange={e => setTextQr(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            
            </div>
          </article>
        </div>
        <p class="subtitle is-5 is-size-7">
          <a className="has-text-light"  target="_blank" href="https://github.com/mortegac">Desarrollado por Manuel Ortega Carcamo</a> <br />
          <a className="is-size-5 has-text-warning"  target="_blank" href="http://www.recursiva.com.ar/a/">Empresa Recursiva</a>
        </p>

      </header>
    </div>
  );
}

export default App;
