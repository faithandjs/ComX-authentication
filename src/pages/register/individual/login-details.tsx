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
          <label htmlFor=" ">Phone Number</label>
          <div>
            <select
              name="Country Code"
              // id="type-of-business"
            >
              <option value="">a</option>
              <option value="">b</option>
              <option value="" defaultValue={'+234'}>
                +234
              </option>
              <option value="">d</option>
            </select>
            <input
              type="number"
              // id="confirm-password"
              name="Number"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>
      </>
    </BIL>
  );
};

export default LoginDetails;
