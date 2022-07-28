import BIL from '@/components/basic-info-layout';
import { typeOption } from 'type';
import '../../../styles/register/INDV_CORP_BIL.scss';
import { Link } from 'gatsby';
import { useState } from 'react';
import FormWrapper from '@/components/form-wrapper';
//individual
const IdBasicInfo = () => {
  const [first_name, setF] = useState('');
  const [last_name, setL] = useState('');
  const [email, setE] = useState('');
  console.log(first_name, last_name, email);
  return (
    <BIL type={typeOption.IND} level={1}>
      <FormWrapper
        level={1}
        type={typeOption.IND}
        obj={{
          first_name,
          last_name,
          email,
        }}
        nextLink="/register/individual/login-details"
      >
        <>
          <div className="names">
            <div className="half-input-box input-box">
              <label htmlFor="first-name">Your First Name</label>
              <input
                onChange={(e) => setF(e.target.value)}
                value={first_name}
                type="text"
                id="first-name"
                name="First name"
                placeholder="Enter your First Name"
                required
              />
            </div>
            <div className="half-input-box input-box">
              <label htmlFor="last-name">Your Last Name</label>
              <input
                onChange={(e) => setL(e.target.value)}
                value={last_name}
                type="text"
                id="last-name"
                name="Last name"
                placeholder="Enter your Last Name"
                required
              />
            </div>
          </div>
          <div className="full-input-box input-box">
            <label htmlFor="email">Your Email</label>
            <input
              onChange={(e) => setE(e.target.value)}
              value={email}
              type="email"
              id="email"
              name="Email"
              placeholder="Enter your Email"
              required
            />
          </div>
        </>
      </FormWrapper>
    </BIL>
  );
};

export default IdBasicInfo;
