import ResetPasswordLayout from '@/components/reset-password-layout';

const OtpValidation = () => {
  return (
    <ResetPasswordLayout
      level={2}
      nextLink="/dashboard/market/order-book"
      prevLink="/sign-in/password-reset"
    >
      <>
        <div className="input-box">
          <label htmlFor="recovery-otp">
            Enter the 4-digit code that was sent to name@mymail.com
          </label>
          <input
            type="text"
            name="Recovery OTP"
            id="recovery-otp"
            placeholder="Enter code"
            // required
          />
        </div>
        <button className="text3">Resend Code</button>
      </>
    </ResetPasswordLayout>
  );
};

export default OtpValidation;
