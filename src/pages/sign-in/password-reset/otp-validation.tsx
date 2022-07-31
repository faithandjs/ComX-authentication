import ResetPasswordLayout from '@/components/reset-password-layout';
import { Link, navigate } from 'gatsby';
import { personalEval, evaluate } from '@/components/functions';
import useNewContext from '@/context/context';
import { useState } from 'react';
const OtpValidation = () => {
  const [OTP, setOTP] = useState('');
  const { handlePasswordResetOTPValidation, handleResendOTP } = useNewContext();
  const evalProps = {
    selector: '#REC_OTP',
    name: 'Code',
    otp: true,
  };
  return (
    <ResetPasswordLayout>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (personalEval(evalProps))
            if (handlePasswordResetOTPValidation(OTP)) {
              console.log('success');
              navigate('/dashboard/market/order-book');
            }
        }}
      >
        <div className="input-box" id="REC_OTP">
          <label htmlFor="recovery-otp">
            Enter the 4-digit code that was sent to name@mymail.com
          </label>
          <input
            type="text"
            name="Recovery OTP"
            id="recovery-otp"
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
        <button className="text3" onClick={() => handleResendOTP('old')}>
          Resend Code
        </button>

        <div className="steps">
          <button>
            <Link to="/sign-in/password-reset">BACK</Link>
          </button>
          <button
            className="orange"
            type="submit"
            onClick={() => personalEval(evalProps)}
          >
            PROCEED
          </button>
        </div>
      </form>
    </ResetPasswordLayout>
  );
};

export default OtpValidation;
