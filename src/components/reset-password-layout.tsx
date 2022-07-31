import Layout from './layout';
export interface signinProps {
  children: JSX.Element;
}
const ResetPasswordLayout = ({ children }: signinProps) => {
  return (
    <Layout>
      <div className="bif-box">
        <h1>Password Reset</h1>
        <p className="text1">Reset your password to continue trading on ComX</p>
        <>{children}</>
      </div>
    </Layout>
  );
};

export default ResetPasswordLayout;
