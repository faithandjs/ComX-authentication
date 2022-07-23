import { typeOption, BILProps } from '../../type';
import Layout from './layout';
import ProgressLayout from './progress-layout';
import { Link } from 'gatsby';
import '../styles/components/BIL.scss';

const BIL = ({ children, type, nextLink, prevLink, level }: BILProps) => {
  return (
    <Layout>
      <ProgressLayout level={level}>
        <div className="bif-box">
          <h1>{level === 3 ? 'Account details' : 'Register new Account'}</h1>
          <p className="text1">
            Sign up for an account and start trading today
          </p>
          {level === 1 ? (
            <div className="category">
              <p className="text2">
                Select the category that best describes you
              </p>
              <div className="btns">
                <Link to="/register/individual/basic-information">
                  <button className={type === typeOption.IND ? 'btn-dark' : ''}>
                    {typeOption.IND}
                  </button>
                </Link>

                <Link to="/register/corporate/basic-information">
                  <button
                    className={type === typeOption.CORP ? 'btn-dark' : ''}
                  >
                    {typeOption.CORP}
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <></>
          )}
          <form action="">{children}</form>
          <div className={`steps ${level !== 3 ? 'center' : ''}`}>
            {level === 3 ? (
              <>
                <Link to={prevLink ? prevLink : ''}>
                  <button type="button">BACK</button>
                </Link>
                <Link to={nextLink}>
                  <button type="submit" className="orange">
                    FINISH
                  </button>
                </Link>
              </>
            ) : (
              <Link to={nextLink}>
                <button type="button" className="orange">
                  NEXT STEP
                </button>
              </Link>
            )}{' '}
          </div>
        </div>
      </ProgressLayout>
    </Layout>
  );
};

export default BIL;
