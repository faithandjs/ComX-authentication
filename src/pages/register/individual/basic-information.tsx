import BIL from '@/components/basic-info-layout';
import { typeOption } from 'type';
import '../../../styles/register/INDV_CORP_BIL.scss';
import { Link } from 'gatsby';
//individual
const IdBasicInfo = () => {
  return (
    <BIL
      type={typeOption.IND}
      nextLink="/register/individual/login-details"
      level={1}
    >
      <>
        <form action="" className="individual-BIL">
          <div className="names">
            <div className="half-input-box input-box">
              <label htmlFor="first-name">Your First Name</label>
              <input
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
              type="email"
              id="email"
              name="Email"
              placeholder="Enter your Email"
              required
            />
          </div>
        </form>
      </>
    </BIL>
  );
};

export default IdBasicInfo;
