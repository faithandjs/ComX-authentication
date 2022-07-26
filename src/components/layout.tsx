import image from '../images/comX.png';
import msg_icon from '../images/messenger.png';
import '../styles/components/layout.scss';
import { layoutProps } from 'type';
import { useState } from 'react';

const Layout = ({ children }: layoutProps) => {
  const [state, setState] = useState<'none' | 'block'>('none');
  return (
    <>
      <header className="forms">
        <img src={image} alt="logo of comX" />
      </header>
      <main>{children}</main>
      <footer className="forms">
        <div className="box" style={{display: state}}>
          <h3>Hi, I'm Adanna</h3>
          <p>How may I help you?</p>
        </div>
        <button
          onClick={() =>
            state === 'none' ? setState('block') : setState('none')
          }
        >
          <img src={msg_icon} alt="chat icon" />
        </button>
      </footer>
    </>
  );
};

export default Layout;
