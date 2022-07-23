import image from '../images/comX.png';
import msg_icon from '../images/messenger.png';
import '../styles/layout.scss';

interface layoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <header>
        <img src={image} alt="logo of comX" />
      </header>
      <main>{children} </main>
      <footer>
        <button>
          <div className="box">
            <h3>Hi, I'm Adanna</h3>
            <p>How may I help you?</p>
          </div>
          <img src={msg_icon} alt="chat icon" />
        </button>
      </footer>
    </>
  );
};

export default Layout;
