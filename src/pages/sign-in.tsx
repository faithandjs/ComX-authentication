import Layout from '../components/layout';
import { Link, navigate } from 'gatsby';
import '../styles/sign-in.scss';
import { evaluate, personalEval, validate } from '@/components/functions';
import useNewContext from '@/context/context';
import { useState } from 'react';

const Signin = () => {
  const { handleSignin } = useNewContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const evalProps = [
    {
      selector: '#EMAiL_SIGNIN',
      name: 'Email',
    },
    {
      selector: '#PWD_SIGNIN',
      name: 'Password',
    },
  ];
  return (
    <Layout>
      <div className="bif-box">
        <h1>Sign in to ComX</h1>
        <div className="text1">Enter your login credentials below.</div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            if (validate(evalProps)) {
              // if (handleSignin({ email, password }))
                navigate('/dashboard/market/order-book');
            } else {
              evaluate(evalProps);
            }
          }}
        >
          <div className="input-box" id="EMAiL_SIGNIN">
            <label htmlFor="user-email">Your Email</label>
            <input
              type="email"
              name="User Email"
              id="user-email"
              placeholder="Enter your Email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value.trim());
                personalEval({
                  selector: '#EMAiL_SIGNIN',
                  name: 'Email',
                });
              }}
            />
            <span>error msg</span>
          </div>
          <div className="input-box" id="PWD_SIGNIN">
            <label htmlFor="user-password">Your Password</label>
            <input
              type="password"
              name="User Password"
              id="user-password"
              placeholder="*******"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value.trim());
                personalEval({
                  selector: '#PWD_SIGNIN',
                  name: 'Password',
                });
              }}
            />
            <span>error msg</span>
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
            <button
              type="submit"
              className="btn-green "
              onClick={() => {
                evaluate(evalProps);
              }}
            >
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
