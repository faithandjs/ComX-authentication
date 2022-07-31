import BIL from '@/components/basic-info-layout';
import FormWrapper from '@/components/form-wrapper';
import { useState, useEffect } from 'react';
import { typeOption } from 'type';
import { personalEval, confirmPassword } from '@/components/functions';

const LoginDetails = () => {
  const [number, setNUM] = useState<any>('');
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
        evalProps={[
          { selector: '#PWD_INDV', name: 'Password' },
          {
            selector: null,
            password_selector: '#PWD_INDV',
            confirm_selector: '#CPWD_INDV',
          },
          {
            selector: '#NUM',
            name: 'Phone Number',
            num: true,
          },
        ]}
      >
        <>
          <div className="full-input-box input-box" id="PWD_INDV">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => {
                setPWD(e.target.value.trim());
                personalEval({ selector: '#PWD_INDV', name: 'Password' });
              }}
              value={password}
              type="password"
              id="password"
              name="Password"
              placeholder="Enter your password"
              required
            />
            <span>error msg</span>
          </div>
          <div className="full-input-box input-box" id="CPWD_INDV">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onChange={(e) => {
                setCPWD(e.target.value.trim());
                confirmPassword({
                  selector: null,
                  password_selector: '#PWD_INDV',
                  confirm_selector: '#CPWD_INDV',
                });
              }}
              value={confirm_password}
              type="password"
              id="confirm-password"
              name="Confirm Password"
              placeholder="Confirm password"
              required
            />
            <span>error msg</span>
          </div>
          <div className="input-box number-box" id="NUM">
            <label htmlFor=" ">
              Phone Number
              <div>
                <select
                  name="Country Code"
                  id="country-code"
                  onChange={(e) => setCC(e.target.value.trim())}
                  defaultValue={+234}
                >
                  <option value={+234}>+234</option>

                  <option value={+234}>+44</option>
                  <option value={+234}>+233</option>
                </select>
                <input
                  onChange={(e) => {
                    setNUM(e.target.value.trim());
                    personalEval({
                      selector: '#NUM',
                      name: 'Phone Number',
                      num: true,
                    });
                  }}
                  value={number}
                  type="text"
                  id="phone-number"
                  name="Phone Number"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <span>error msg</span>
            </label>
          </div>
        </>
      </FormWrapper>
    </BIL>
  );
};

export default LoginDetails;
