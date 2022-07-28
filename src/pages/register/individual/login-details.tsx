import BIL from '@/components/basic-info-layout';
import FormWrapper from '@/components/form-wrapper';
import { useState, useEffect } from 'react';
import { typeOption } from 'type';

const LoginDetails = () => {
  const [number, setNUM] = useState('0');
  const [CC, setCC] = useState('');
  const [password, setPWD] = useState('');
  const [confirm_password, setCPWD] = useState('');
  //individual
  return (
    <BIL level={2}>
      <FormWrapper
        level={2}
        nextLink="/register/individual/otp-verification"
        type={typeOption.IND}
        obj={{
          password,
          auth_type: 'password',
          phone: '+' + CC + number,
          occupation: 'Farmer',
          referral_code: '',
        }}
        canG0={
          password === confirm_password && password.length > 1 ? true : false
        }
      >
        <>
          <div className="full-input-box input-box">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPWD(e.target.value)}
              value={password}
              type="password"
              id="password"
              name="Password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="full-input-box input-box">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onChange={(e) => setCPWD(e.target.value)}
              value={confirm_password}
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
                <select
                  name="Country Code"
                  id="country-code"
                  onChange={(e) => setCC(e.target.value)}
                  defaultValue={'DEFAULT'}
                >
                  <option value="DEFAULT" disabled>
                    +234
                  </option>
                  <option value={+234}>+234</option>

                  <option value={+234}>+44</option>
                  <option value={+234}>+233</option>
                </select>
                <input
                  onChange={(e) => setNUM(e.target.value)}
                  value={number}
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
      </FormWrapper>
    </BIL>
  );
};

export default LoginDetails;
