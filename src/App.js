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
                
                {/* <div className="field is-grouped">
                  <div className="control has-icons-left">
                    <button 
                      className="button is-link"
                      onClick={() => handleSubmit}
                    >Generar QR</button>
                  </div>
                </div> */}
              </div>
            
            </div>
          </article>
</div>

      </header>
    </div>
  );
}

export default App;
