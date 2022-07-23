import Layout from '@/components/layout';
import React from 'react';
import '../styles/welcome.scss';
import '../styles/global.scss';

interface cardProps {
  title: string;
  text: string;
  btnText: string;
  btnClass: string;
}
const Welcome = () => {
  const Card = ({ title, text, btnText, btnClass }: cardProps) => {
    return (
      <div className="index-card">
        <h2>{title}</h2>
        <p>{text}</p>
        <button type='button' className={btnClass}>{btnText} </button>
      </div>
    );
  };
  return (
    <Layout>
      <>
      <div className="welcome">
        <Card
          title="Sign in to ComX"
          text="Welcome to ComX"
          btnText="Sign in"
          btnClass="btn-green"
        />
        <Card
          title="Create an Account"
          text="Join the Family"
          btnText="Register"
          btnClass="btn-dark"
        /></div>
      </>
    </Layout>
  );
};

export default Welcome;
