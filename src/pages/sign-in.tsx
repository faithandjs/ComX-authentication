import Layout from '../components/layout';
import { Link } from 'gatsby';
import '../styles/sign-in.scss';

const Signin = () => {
  return (
    <Layout>
      <div className="bif-box">
        <h1>Sign in to ComX</h1>
        <div className="text1">Enter your login credentials below.</div>
        <form action="">
          <div className="input-box">
            <label htmlFor="user-email">Your Email</label>
            <input
              type="text"
              name="User Email"
              id="user-email"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="user-password">Your Password</label>
            <input
              type="text"
              name="User Password"
              id="user-password"
              placeholder="*******"
              required
            />
          </div>
          <div className="more">
            <div className="input-box checkbox">
              <input type="checkbox" name="Stay Signedin" id="stay-signedin" />
              <label htmlFor="stay-signedin">Stay Signed in</label>
            </div>
            <Link to="/sign-in/password-reset">
              <button className="orange">Forgot Password?</button>
            </Link>
          </div>
          <div className="final">
            <button type="submit" className="btn-green ">
              Sign in
            </button>
            <Link to="/welcome">
              <button>Back</button>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signin;
