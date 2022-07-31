import BIL from '@/components/basic-info-layout';
import { useState } from 'react';
import FormWrapper from '@/components/form-wrapper';
import { typeOption } from 'type';
import { confirmPassword, personalEval } from '@/components/functions';

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
        evalProps={[
          {
            selector: '#EMAIL_CORP',
            name: 'Company Email',
          },
          {
            selector: '#PWD_CORP',
            name: 'Password',
          },
          {
            selector: null,
            password_selector: '#PWD_CORP',
            confirm_selector: '#CPWD_CORP',
          },
        ]}
      >
        <>
          <div className="full-input-box input-box" id="EMAIL_CORP">
            <label htmlFor="company-email">Company Email</label>
            <input
              onChange={(e) => {
                setE(e.target.value.trim());
                personalEval({
                  selector: '#EMAIL_CORP',
                  name: 'Company Email',
                });
              }}
              value={email}
              type="email"
              id="company-email"
              name="Company Email"
              placeholder="Enter Email"
              required
            />
            <span>error msg</span>
          </div>

          <div className="full-input-box input-box" id="PWD_CORP">
            <label htmlFor="company-password">Password</label>
            <input
              onChange={(e) => {
                setPWD(e.target.value.trim());
                personalEval({
                  selector: '#PWD_CORP',
                  name: 'Password',
                });
              }}
              value={password}
              type="password"
              id="company-password"
              name="Company Password"
              placeholder="Enter your password"
              required
            />
            <span>error msg</span>
          </div>
          <div className="full-input-box input-box" id="CPWD_CORP">
            <label htmlFor="confirm-company-password">Confirm Password</label>
            <input
              onChange={(e) => {
                setCPWD(e.target.value.trim());
                confirmPassword({
                  selector: null,
                  password_selector: '#PWD_CORP',
                  confirm_selector: '#CPWD_CORP',
                });
              }}
              value={confirm_password}
              type="password"
              id="confirm-company-password"
              name="Confirm Company Password"
              placeholder="Confirm password"
              required
            />
            <span>error msg</span>
          </div>
        </>
      </FormWrapper>
    </BIL>
  );
};

export default LoginDetails;
