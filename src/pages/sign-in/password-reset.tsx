import ResetPasswordLayout from '@/components/reset-password-layout';
import { Link, navigate } from 'gatsby';
const PasswordReset = () => {
  return (
    <ResetPasswordLayout>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate('/sign-in/password-reset/otp-validation');
        }}
      >
        <div className="input-box">
          <label htmlFor="recovery-email">
            Enter the Email Address you registered with
          </label>
          <input
            type="text"
            name="Recovery Email"
            id="recovery-email"
            placeholder="Enter your email "
            required
          />
        </div>
        <p className="text3">
          Note that you'll be sent an OTP to the email address provided
        </p>
        <div className="steps">
          <button>
            <Link to="/sign-in">BACK</Link>
          </button>
          <button className="orange" type="submit">
            FINISH
          </button>
        </div>
      </form>
    </ResetPasswordLayout>
  );
};

export default PasswordReset;
