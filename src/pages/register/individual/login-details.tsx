import BIL from '@/components/basic-info-layout';

const LoginDetails = () => {
  //individual
  return (
    <BIL nextLink="/register/individual/otp-verification" level={2}>
      <>
        <div className="full-input-box input-box">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="Password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="full-input-box input-box">
          <label htmlFor="confirm-password">Password</label>
          <input
            type="password"
            id="confirm-password"
            name="Confirm Password"
            placeholder="Confirm password"
            required
          />
        </div>
        <div className="input-box number-box">
          <label htmlFor=" ">
            Phone Number
            <div>
              <select name="Country Code" id="country-code">
                <option value="+234">+234</option>
              </select>
              <input
                type="number"
                id="phone-number"
                name="Phone Number"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </label>
        </div>
      </>
    </BIL>
  );
};

export default LoginDetails;
