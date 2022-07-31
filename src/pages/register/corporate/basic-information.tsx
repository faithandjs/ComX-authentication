import BIL from '@/components/basic-info-layout';
import { typeOption } from 'type';
import useNewContext from '@/context/context';
import FormWrapper from '@/components/form-wrapper';
import { personalEval } from '@/components/functions';
import { navigate } from 'gatsby';
import { useEffect, useRef, useState } from 'react';
//corporate
const CorpBasicInfo = () => {
  const { setting } = useNewContext();
  const [company_name, setCN] = useState('');
  const [nature_of_business, setNB] = useState('');
  const [date_of_incorporation, setDI] = useState('');

  return (
    <BIL type={typeOption.CORP} level={1}>
      <FormWrapper
        level={1}
        type={typeOption.CORP}
        nextLink={'/register/corporate/login-details'}
        obj={{
          company_name,
          nature_of_business,
          date_of_incorporation,
        }}
        evalProps={[
          {
            selector: '#CN',
            name: 'Company name',
            alph: true,
          },
          {
            selector: '#NB',
            name: 'Type of Business',
            select: true,
          },
          {
            selector: '#DI',
            name: 'Date of Incorporation',
          },
        ]}
      >
        <>
          <div className="full-input-box input-box" id="CN">
            <label htmlFor="company-name">Company Name</label>
            <input
              onChange={(e) => {
                setCN(e.target.value.trim());
                personalEval({
                  selector: '#CN',
                  name: 'Company name',
                  alph: true,
                });
              }}
              value={company_name}
              type="text"
              id="company-name"
              name="Company Name"
              placeholder="Enter your company name"
              required
            />
            <span>error msg</span>
          </div>
          <div className="more">
            <div className="half-input-box input-box" id="NB">
              <label htmlFor="type-of-business">Type of Business</label>
              <select
                name="Type of Business"
                id="type-of-business"
                onChange={(e) => {
                  setNB(e.target.value.trim());
                  personalEval({
                    selector: '#NB',
                    name: 'Type of Business',
                    select: true,
                  });
                }}
                defaultValue={'Teacher'}
              >
                <option value="Teacher">Teacher</option>
                <option value="Farmer">Farmer</option>
                <option value="Civil Servant">Civil Servant</option>
              </select>
              <span>error msg</span>
            </div>
            <div className="half-input-box input-box" id="DI">
              <label htmlFor="date-of">Date of Incorporation</label>
              <input
                onChange={(e) => {
                  setDI(e.target.value.trim());
                  personalEval({
                    selector: '#DI',
                    name: 'Date of Incorporation',
                  });
                }}
                type="date"
                id="date-of"
                name="Date of Incorporation"
                required
              />
              <span>error msg</span>
            </div>
          </div>
        </>
      </FormWrapper>
    </BIL>
  );
};

export default CorpBasicInfo;
