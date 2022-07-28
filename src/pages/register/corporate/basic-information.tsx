import BIL from '@/components/basic-info-layout';
import { typeOption } from 'type';
import useNewContext from '@/context/context';
import FormWrapper from '@/components/form-wrapper';
import { Link } from 'gatsby';
import { navigate } from 'gatsby';
import { useEffect, useState } from 'react';
//corporate
const CorpBasicInfo = () => {
  const {} = useNewContext();
  const [company_name, setCN] = useState('');
  const [nature_of_business, setNB] = useState('');
  const [date_of_incorporation, setDI] = useState('');
  // useEffect(() => {
  //   typeof window === 'object' &&
  //     setNB(document.querySelector('select')?.value!);
  // }, []);
  return (
    <BIL
      type={typeOption.CORP}
     level={1}
    >
      <FormWrapper
        level={1}
        nextLink="/register/corporate/login-details"
        type={typeOption.CORP}
        obj={{
          company_name,
          nature_of_business,
          date_of_incorporation,
        }}
      >
        <>
          <div className="full-input-box input-box">
            <label htmlFor="company-name">Company Name</label>
            <input
              onChange={(e) => setCN(e.target.value)}
              value={company_name}
              type="text"
              id="company-name"
              name="Company Name"
              placeholder="Enter your company name"
              required
            />
          </div>
          <div className="more">
            <div className="half-input-box input-box">
              <label htmlFor="type-of-business">Type of Business</label>

              <select
                name="Type of Business"
                id="type-of-business"
                onChange={(e) => setNB(e.target.value)}
                defaultValue={'DEFAULT'}
              >
                <option value="DEFAULT" disabled>
                  Teacher
                </option>
                <option value="Teacher">Teacher</option>
                <option value="Farmer">Farmer</option>
                <option value="Civil Servant">Civil Servant</option>
              </select>
            </div>
            <div className="half-input-box input-box">
              <label htmlFor="date-of">Date of Incorporation</label>
              <input
                onChange={(e) => setDI(e.target.value)}
                type="date"
                id="date-of"
                name="Date of Incorporation"
                required
              />
            </div>
          </div>
        </>
      </FormWrapper>
    </BIL>
  );
};

export default CorpBasicInfo;
