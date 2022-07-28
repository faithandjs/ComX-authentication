import BIL from '@/components/basic-info-layout';
import { useState } from 'react';
import FormWrapper from '@/components/form-wrapper';
import { typeOption } from 'type';

const LoginDetails = () => { 
  const [email, setE] = useState('');
  const [password, setPWD] = useState('');
  const [confirm_password, setCPWD] = useState('');
  //corporate
  return (
    <BIL level={2}>
      <FormWrapper
        nextLink="/register/corporate/otp-verification"
        level={2}
        type={typeOption.CORP}
        obj={{
          email,
          password,
          auth_type: 'password',
          rc_number: 3245463454,
          company_website: 'example@email.com',
          company_phone: +2349012345600,
          referral_code: '',
        }}
        canG0={
          password === confirm_password && password.length > 1 ? true : false
        }
      >
        <>
          <div className="full-input-box input-box">
            <label htmlFor="company-email">Company Email</label>
            <input
              onChange={(e) => setE(e.target.value)}
              value={email}
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
              onChange={(e) => setPWD(e.target.value)}
              value={password}
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
              onChange={(e) => setCPWD(e.target.value)}
              value={confirm_password}
              type="password"
              id="confirm-company-password"
              name="Confirm Company Password"
              placeholder="Confirm passwordd"
              required
            />
          </div>
        </>
      </FormWrapper>
    </BIL>
  );
};

export default LoginDetails;
