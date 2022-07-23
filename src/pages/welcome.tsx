import Layout from '@/components/layout';
import '../styles/welcome.scss';
import '../styles/global.scss';
import { Link } from 'gatsby';
import { cardProps } from 'type';

const Welcome = () => {
  const Card = ({ title, text, btnText, btnClass, to }: cardProps) => {
    return (
      <div className="index-card">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link to={to}>
          <button type="button" className={btnClass}>
            {btnText}
          </button>
        </Link>
      </div>
    );
  };
  return (
    <Layout>
      <>
        <div className="welcome">
          <Card
            title="Sign in to ComX"
            text="Welcome to ComX"
            btnText="Sign in"
            btnClass="btn-green"
            to="/sign-in"
          />
          <Card
            title="Create an Account"
            text="Join the Family"
            btnText="Register"
            btnClass="btn-dark"
            to="/register/corporate/basic-information"
          />
        </div>
      </>
    </Layout>
  );
};

export default Welcome;
