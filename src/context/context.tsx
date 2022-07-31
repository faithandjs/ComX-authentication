import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  layoutProps,
  INDV_FF,
  INDV_SF,
  CORP_FF,
  CORP_SF,
  set,
  typeOption,
  signin,
} from 'type';

import Manager from '../../encryption';

const newContext = createContext<any>(null);
const { Provider } = newContext;

const manager = new Manager({
  key: process.env.GATSBY_KEY,
  vector: process.env.GATSBY_VECTOR,
});

export const Context = ({ children }: layoutProps) => {
  const [email, setEmail] = useState('');
  const [firstForm, setFF] = useState<INDV_FF | CORP_FF>();
  const [secondForm, setSF] = useState<INDV_SF | CORP_SF>();
  const [finalForm, setFinal] = useState<any>();
  useEffect(() => {
    setFinal({ ...firstForm, ...secondForm });
  }, [firstForm, secondForm]);
  const setting = ({ value1, value2 }: set) => {
    if (value1) setFF(value1);
    if (value2) setSF(value2);
  };
  function handleRegister(key: typeOption) {
    const URL =
      key === typeOption.CORP
        ? 'https://comx-sand-api.afexnigeria.com/api/corporate-client-register'
        : 'https://comx-sand-api.afexnigeria.com/api/register';
    let form_data = new FormData();
    form_data.append('email', 'samkddfkkdwe@mailinator.com');
    form_data.append('password', 'Password@1');
    form_data.append('first_name', 'Test');
    form_data.append('last_name', 'Test');
    form_data.append('auth_type', 'password');
    form_data.append('referral_code', '');
    form_data.append('phone', '+2348054643230');
    form_data.append('occupation', 'Farmer');

    const data = manager.encrypt(form_data);
    const headers = new Headers();
    // headers.set('Content-Type', 'application/json');
    // headers.set(
    //   'Authorization',
    //   `Bearer ${
    //     // sessionStorage.getItem("user.auth.token") ?? context.user?.token
    //   }`,
    // );

    fetch(URL, {
      method: 'POST',
      body: data,
      headers,
    })
      .then((response) => response.json())
      .then((response) => {
        // manager.decrypt(response); // impure decryption
        console.log(response); // something intelligible
      });
    //onSuccess return true and go to next page else return false
    return false;
  }
  const handleSignin = ({ email, password }: signin) => {
    const form_data = new FormData();
    form_data.append('email', email);
    form_data.append('password', password);
    form_data.append('auth_type', 'password');
    //encrypt
    fetch('https://comx-sand-api.afexnigeria.com/api/login', {
      method: 'POST',
      body: form_data,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        // manager.decrypt(response); // impure decryption
        console.log(result);
      })
      .catch((error) => console.log('error', error));
  };
  const handleOTPRequest = (email: string) => {
    setEmail(email);
    const form_data = new FormData();
    form_data.append('email', email);
    //encrypt
    fetch('https://comx-sand-api.afexnigeria.com/api/password-reset-request', {
      method: 'POST',
      body: form_data,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        // manager.decrypt(response); // impure decryption
        console.log(result);
      })
      .catch((error) => console.log('error', error));

    return false;
  };
  const handleOTPValidation = (OTP: string) => {
    const form_data = new FormData();
    form_data.append('otp', OTP);
    //encrypt
    fetch('https://ecncomx-api.afexnigeria.com/api/otp/validate', {
      method: 'POST',
      body: form_data,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        // manager.decrypt(response); // impure decryption
        console.log(result);
      })
      .catch((error) => console.log('error', error));

    return false;
  };
  const handlePasswordResetOTPValidation = (OTP: string) => {
    const form_data = new FormData();
    form_data.append('otp', OTP);
    form_data.append('email', email);

    fetch(
      'https://comx-sand-api.afexnigeria.com/api/password-reset-otp-validation',
      {
        method: 'POST',
        body: form_data,
        redirect: 'follow',
      },
    )
      .then((response) => response.text())
      .then((result) => {
        // manager.decrypt(response); // impure decryption
        console.log(result);
      })
      .catch((error) => console.log('error', error));

    return false;
  };
  const handleResendOTP = (value: 'new' | 'old') => {
    const newEmail = value === 'new' ? finalForm.email : email;

    const form_data = new FormData();
    form_data.append('email', newEmail);
    //encypt
    fetch('https://ecncomx-api.afexnigeria.com/api/otp/resend', {
      method: 'POST',
      body: form_data,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        // manager.decrypt(response); // impure decryption
        console.log(result);
      })
      .catch((error) => console.log('error', error));
    return false;
  };

  const value = useMemo(
    () => ({
      setting,
      handleRegister,
      handleSignin,
      handleOTPRequest,
      handleOTPValidation,
      handleResendOTP,
      handlePasswordResetOTPValidation,
    }),
    [
      setting,
      handleRegister,
      handleSignin,
      handleOTPRequest,
      handleOTPValidation,
      handleResendOTP,
      handlePasswordResetOTPValidation,
    ],
  );
  return <Provider value={value}>{children}</Provider>;
};
const useNewContext = () => {
  const context = useContext(newContext);
  return context;
};

export default useNewContext;
