import ResetPasswordLayout from '@/components/reset-password-layout';
import { Link, navigate } from 'gatsby';
const OtpValidation = () => {
  return (
    <ResetPasswordLayout>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate('/dashboard/market/order-book');
        }}
      >
        <div className="input-box">
          <label htmlFor="recovery-otp">
            Enter the 4-digit code that was sent to name@mymail.com
          </label>
          <input
            type="text"
            name="Recovery OTP"
            id="recovery-otp"
            placeholder="Enter code"
            required
          />
        </div>
        <button className="text3">Resend Code</button>

        <div className="steps">
          <button>
            <Link to="/sign-in/password-reset">BACK</Link>
          </button>
          <button className="orange" type="submit">
            PROCEED
          </button>
        </div>
      </form>
    </ResetPasswordLayout>
  );
};

export default OtpValidation;
