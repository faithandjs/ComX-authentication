import crypto from 'crypto';
interface constructor {
  key: any;
  vector: any;
}
export default class Manager {
  encrypt: (e: FormData) => any;
  decrypt: (e: any) => any;
  constructor({ key, vector }: constructor) {
    // console.log(key,vector)
    (this.encrypt = (formData) => {
      console.log('key and vector', key,vector);
      do_encrypt_data({ formData, key, vector });
    }),
      (this.decrypt = (data) => do_decrypt_data({ data, key, vector }));
  }
}
interface doEncryptData {
  key?: any; // t?: any;
  vector?: any;// r?: any;
  formData?: FormData;
}
interface doDecryptData {
  key?: any; // t?: any;
  vector?: any; // r?: any;
  data?: any;
}
function do_encrypt_data({ key, vector, formData }: doEncryptData) {
  console.log('data in encrypt', crypto.createCipheriv);
  function func(param: string) {
    let a = crypto.createCipheriv('aes-256-cbc', key, vector);
    return Buffer.concat([a.update(param), a.final()]).toString('base64');
  }
  if (Array.isArray(key))
    key.forEach((x: any, y: number) => {
      key[y] = do_encrypt_data({ vector: x });
    });
  else if ('object' == typeof key)
    for (let r in key) {
      key.hasOwnProperty(r) &&
        (Array.isArray(key[r])
          ? (key[r] = do_encrypt_data({ key: key[r] }))
          : 'object' == typeof key[r]
          ? (key[r] = do_encrypt_data({ key: key[r] }))
          : (key[r] = func(key[r].toString())));
    }
  else key = func(key.toString());
  console.log('t in encrypt', key);
  return key;
}
function do_decrypt_data({ key, vector, data }: doDecryptData) {
  function func(param: string) {
    if ('string' == typeof key && 0 === key.trim().length) return key;
    try {
      let a = crypto.createDecipheriv('aes-256-cbc', key, vector);
      return Buffer.concat([
        a.update(Buffer.from(param, 'base64')),
        a.final(),
      ]).toString();
    } catch (r) {
      return key.toString();
    }
  }
  if (Array.isArray(key))
    key.forEach((item, index) => {
      key[index] = do_decrypt_data({ vector: item });
    });
  else if ('object' == typeof vector)
    for (let r in vector) {
      let TofR = key[r];
      key.hasOwnProperty(r) &&
        (Array.isArray(key[r])
          ? (key[r] = do_decrypt_data({ key: TofR }))
          : 'object' == typeof key[r]
          ? (key[r] = do_decrypt_data({ key: TofR }))
          : (key[r] = func(key[r].toString())));
    }
  else key = func(key.toString());
  return key;
}
