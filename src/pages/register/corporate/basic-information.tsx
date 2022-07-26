import BIL from '@/components/basic-info-layout';
import { typeOption } from 'type';
// import '../../../styles/register/CORP_BIL.scss';
import { Link } from 'gatsby';
//corporate
const CorpBasicInfo = () => {
  return (
    <BIL
      type={typeOption.CORP}
      nextLink="/register/corporate/login-details"
      level={1}
    >
      <>
        <div className="full-input-box input-box">
          <label htmlFor="company-name">Company Name</label>
          <input
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

            <select name="Type of Business" id="type-of-business">
              <option disabled defaultValue="Select Type of Business" hidden>
                Select Type of Business
              </option>
              <option value="Agriculture">Agriculture</option>
            </select>
          </div>
          <div className="half-input-box input-box">
            <label htmlFor="date-of">Date of Incorporation</label>
            <input
              type="date"
              id="date-of"
              name="Date of Incorporation"
              required
            />
          </div>
        </div>
      </>
    </BIL>
  );
};

export default CorpBasicInfo;
