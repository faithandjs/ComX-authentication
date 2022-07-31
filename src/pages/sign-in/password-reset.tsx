import { personalEval } from '@/components/functions';
import ResetPasswordLayout from '@/components/reset-password-layout';
import { Link, navigate } from 'gatsby';
import { useState } from 'react';
import useNewContext from '@/context/context';
const PasswordReset = () => {
  const { handleOTPRequest } = useNewContext();
  const [email, setEmail] = useState('');
  const evalProps = { selector: '#REC_EMAIL', name: 'Email' };
  return (
    <ResetPasswordLayout>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (personalEval(evalProps))
            if (handleOTPRequest(email))
              navigate('/sign-in/password-reset/otp-validation');
        }}
      >
        <div className="input-box" id="REC_EMAIL">
          <label htmlFor="recovery-email">
            Enter the Email Address you registered with
          </label>
          <input
            type="email"
            name="Recovery Email"
            id="recovery-email"
            placeholder="Enter your email "
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value.trim());
              personalEval(evalProps);
            }}
          />
          <span>error msg</span>
        </div>
        <p className="text3">
          Note that you'll be sent an OTP to the email address provided
        </p>
        <div className="steps">
          <button>
            <Link to="/sign-in">BACK</Link>
          </button>
          <button
            className="orange"
            type="submit"
            onClick={() => {
              personalEval(evalProps);
            }}
          >
            FINISH
          </button>
        </div>
      </form>
    </ResetPasswordLayout>
  );
};

export default PasswordReset;
