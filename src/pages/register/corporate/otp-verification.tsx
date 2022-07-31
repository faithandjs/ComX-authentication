import BIL from '@/components/basic-info-layout';
import { personalEval } from '@/components/functions';
import useNewContext from '@/context/context';
import { Link, navigate } from 'gatsby';
import { useState } from 'react';
const OTP = () => {
  const [OTP, setOTP] = useState('');
  const { handleOTPValidation, handleResendOTP } = useNewContext();
  const evalProps = {
    selector: '#CORP_OTP',
    name: 'Code',
    otp: true,
  };
  return (
    <BIL level={3}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (personalEval(evalProps))
            // if (handleOTPValidation(OTP))
              navigate('/register/corporate/registration-successful');
        }}
      >
        <div className="input-box" id="CORP_OTP">
          <label htmlFor="enter-company-otp">
            Enter the 4-digit code that was sent to +23472639482 and
            name@mymail.com
          </label>
          <input
            type="text"
            name="OTP"
            id="enter-company-otp"
            placeholder="Enter code"
            value={OTP}
            required
            onChange={(e) => {
              setOTP(e.target.value.trim());
              personalEval(evalProps);
            }}
          />
          <span>error msg</span>
        </div>
        <div className="extras">
          <button onClick={() => handleResendOTP('new')}>Resend Code </button>
          <button>Verify via Phone Call </button>
        </div>

        <div className="steps">
          <button type="button">
            <Link to="/register/corporate/login-details">BACK </Link>
          </button>

          <button
            type="submit"
            className="orange"
            onClick={() => {
              personalEval(evalProps);
            }}
          >
            FINISH
          </button>
        </div>
      </form>
    </BIL>
  );
};

export default OTP;
