import Layout from './layout';
import { Link } from 'gatsby';
export interface signinProps {
  children: JSX.Element;
  level: 1 | 2;
  nextLink: string;
  prevLink: string;
}
const ResetPasswordLayout = ({ children, level, nextLink, prevLink }: signinProps) => {
  return (
    <Layout>
      <div className="bif-box">
        <h1>Password Reset</h1>
        <p className="text1">Reset your password to continue trading on ComX</p>
        <form action="" method="post">
          {children}
          <div className="steps">
            <Link to={prevLink}>
              <button>BACK</button>
            </Link>
            <Link to={nextLink}>
              <button className="orange" type="submit">
                {level === 1 ? 'PROCEED' : 'FINISH'}
              </button>
            </Link>
          </div>{' '}
        </form>
      </div>
    </Layout>
  );
};

export default ResetPasswordLayout;
