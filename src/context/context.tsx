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
} from 'type';
import Manager from '../../encryption';
// import Manager from '../../encrypt'

const manager = new Manager({
  key: process.env.GATSBY_KEY,
  vector: process.env.GATSBY_VECTOR,
});
const newContext = createContext<any>(null);
const { Provider } = newContext;

export const Context = ({ children }: layoutProps) => {
  // require('dotenv').config();
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
  const settingFinal = (key: typeOption) => {
    console.log('set final');
    if (key === typeOption.IND) {
    } else {
    }

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

    const requestOptions: RequestInit = {
      method: 'POST',
      body: form_data,
      redirect: 'follow',
    };

    fetch('https://git.heroku.com/arcane-wave-42929.git/' + URL, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log('error', error));
  };
  function handleSubmit(key: typeOption) {
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
    manager.encrypt(form_data); // impure encryption

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set(
      'Authorization',
      `Bearer ${
        'password'
        // sessionStorage.getItem("user.auth.token") ?? context.user?.token
      }`,
    );

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(form_data),
      headers,
    })
      .then((response) => response.json())
      .then((response) => {
        manager.decrypt(response); // impure decryption
        console.log(response); // something intelligible
      });
  }
  console.log(manager, 'manager', process.env.GATSBY_KEY, process.env.prop,  process.env.NODE_ENV);
  // console.log(finalForm, firstForm, secondForm); 
  const value = useMemo(
    () => ({ setting, settingFinal, URL, finalForm, handleSubmit }),
    [],
  );
  return <Provider value={value}>{children}</Provider>;
};
const useNewContext = () => {
  const context = useContext(newContext);
  return context;
};

export default useNewContext;
