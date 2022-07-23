import BIL from '@/components/basic-info-layout';

const LoginDetails = () => {
  //corporate
  return (
    <BIL nextLink="/register/corporate/otp-verification" level={2}>
      <>
        <div className="full-input-box input-box">
          <label htmlFor="company-email">Company Email</label>
          <input
            type="text"
            id="company-email"
            name="Company Email"
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="full-input-box input-box">
          <label htmlFor="company-password">Password</label>
          <input
            type="password"
            id="company-password"
            name="Company Password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="full-input-box input-box">
          <label htmlFor="confirm-company-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-company-password"
            name="Confirm Company Password"
            placeholder="Confirm passwordd"
            required
          />
        </div>
      </>
    </BIL>
  );
};

export default LoginDetails;
