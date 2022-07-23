import ResetPasswordLayout from '@/components/reset-password-layout';

const PasswordReset = () => {
  return (
    <ResetPasswordLayout
      level={1}
      nextLink="/sign-in/password-reset/otp-validation"
      prevLink="/sign-in"
    >
      <>
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
      </>
    </ResetPasswordLayout>
  );
};

export default PasswordReset;
