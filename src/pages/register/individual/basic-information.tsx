import BIL from '@/components/basic-info-layout';
import { typeOption } from 'type';
import '../../../styles/register/INDV_CORP_BIL.scss';
import { personalEval } from '@/components/functions';
import { useState } from 'react';
import FormWrapper from '@/components/form-wrapper';
//individual
const IdBasicInfo = () => {
  const [first_name, setF] = useState('');
  const [last_name, setL] = useState('');
  const [email, setE] = useState('');

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
        evalProps={[
          {
            selector: '#FNAME',
            name: 'First Name',
          },
          {
            selector: '#LNAME',
            name: 'Last Name',
          },
          {
            selector: '#INDV_EMAIL',
            name: 'First Name',
          },
        ]}
      >
        <>
          <div className="names">
            <div className="half-input-box input-box" id="FNAME">
              <label htmlFor="first-name">Your First Name</label>
              <input
                onChange={(e) => {
                  setF(e.target.value.trim());
                  personalEval({
                    selector: '#FNAME',
                    name: 'First Name',
                  });
                }}
                value={first_name}
                type="text"
                id="first-name"
                name="First name"
                placeholder="Enter your First Name"
                required
              />
              <span>error msg</span>
            </div>
            <div className="half-input-box input-box" id="LNAME">
              <label htmlFor="last-name">Your Last Name</label>
              <input
                onChange={(e) => {
                  setL(e.target.value.trim());
                  personalEval({
                    selector: '#LNAME',
                    name: 'Last Name',
                  });
                }}
                value={last_name}
                type="text"
                id="last-name"
                name="Last name"
                placeholder="Enter your Last Name"
                required
              />
              <span>error msg</span>
            </div>
          </div>
          <div className="full-input-box input-box" id="INDV_EMAIL">
            <label htmlFor="email">Your Email</label>
            <input
              onChange={(e) => {
                setE(e.target.value.trim());
                personalEval({
                  selector: '#INDV_EMAIL',
                  name: 'First Name',
                });
              }}
              value={email}
              type="email"
              id="email"
              name="Email"
              placeholder="Enter your Email"
              required
            />
            <span>error msg</span>
          </div>
        </>
      </FormWrapper>
    </BIL>
  );
};

export default IdBasicInfo;
