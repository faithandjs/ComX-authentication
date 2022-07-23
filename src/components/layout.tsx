import image from '../images/comX.png';
import msg_icon from '../images/messenger.png';
import '../styles/components/layout.scss';
import { layoutProps } from 'type';

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <header>
        <img src={image} alt="logo of comX" />
      </header>
      <main>{children}</main>
      <footer>
        <div className="box">
          <h3>Hi, I'm Adanna</h3>
          <p>How may I help you?</p>
        </div>
        <button>
          <img src={msg_icon} alt="chat icon" />
        </button>
      </footer>
    </>
  );
};

export default Layout;
