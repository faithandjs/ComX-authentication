import BIL from '@/components/basic-info-layout';
const OTP = () => {
  return (
    <BIL nextLink="/register/corporate/registration-successful" level={3} prevLink="/register/corporate/login-details">
      <>
        <div className="input-box">
          <label htmlFor="enter-company-otp">
            Enter the 4-digit code that was sent to +23472639482 and
            name@mymail.com
          </label>
          <input
            type="text"
            name="OTP"
            id="enter-company-otp"
            placeholder="Enter code"
          />
        </div>
        <div className="extras">
          <button>Resend Code </button>
          <button>Verify via Phone Call </button>
        </div>
      </>
    </BIL>
  );
};

export default OTP;
