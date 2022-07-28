import BIL from '@/components/basic-info-layout';
import { Link, navigate } from 'gatsby';
const OTP = () => {
  return (
    <BIL level={3}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate('/register/corporate/registration-successful');
        }}
      >
        <div className="input-box">
          <label htmlFor="enter-company-otp">
            Enter the 4-digit code that was sent to +23472639482 and
            name@mymail.com
          </label>
          <input
            type="text"
            name="OTP"
            id="enter-company-otp"
            placeholder="Enter code" required
          />
        </div>
        <div className="extras">
          <button>Resend Code </button>
          <button>Verify via Phone Call </button>
        </div>

        <div className="steps">
          <button type="button">
            <Link to="/register/corporate/login-details">BACK </Link>
          </button>

          <button type="submit" className="orange">
            FINISH
          </button>
        </div>
      </form>
    </BIL>
  );
};

export default OTP;
