import BIL from '@/components/basic-info-layout';

const OTP = () => {
  return (
    <BIL nextLink="/register/individual/registration-successful" level={3} prevLink="/register/individual/login-details">
      <>
        <div className="input-box">
          <label htmlFor="enter-otp">
            Enter the 4-digit code that was sent to +23472639482 and
            name@mymail.com
          </label>
          <input
            type="text"
            name="OTP"
            id="enter-otp"
            placeholder="Enter code"
          />
        </div>
        <div className="extras">
          <button>Resend Code </button>
        </div>
      </>
    </BIL>
  );
};

export default OTP;
