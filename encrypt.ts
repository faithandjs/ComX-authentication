import cryptojs from 'crypto-js';

const KEY = `${process.env.GATSBY_KEY}`;
const VECTOR = `${process.env.GATSBY_VECTOR}`;

export const encrypt = (toCipher: string | FormData): string => {
  toCipher = typeof toCipher === 'string' ? toCipher : JSON.stringify(toCipher);
  const encrypted = cryptojs.AES.encrypt(toCipher, KEY, {
    iv: cryptojs.enc.Utf8.parse(VECTOR),
  }).toString();
  const words = cryptojs.enc.Utf8.parse(`${encrypted}`);
  decrypt(cryptojs.enc.Base64.stringify(words));
  decrypt(encrypted);
  // return encrypted;
  return cryptojs.enc.Base64.stringify(words);
};

export const decrypt = (toDecipher: string): any => {
  const b64 = cryptojs.enc.Base64.parse(toDecipher);
  const words = cryptojs.enc.Utf8.stringify(b64);
  console.log(toDecipher);
  let decrypted: any = '';
  try {
    decrypted =
      // cryptojs.AES.decrypt(toDecipher, KEY, {
      decrypted = cryptojs.AES.decrypt(words, KEY, {
        iv: cryptojs.enc.Utf8.parse(VECTOR),
      });
    console.log(decrypted.toString(cryptojs.enc.Utf8));
    
  } catch (error) {
    console.log('e', error);
    
  }
  return decrypted.toString(cryptojs.enc.Utf8);
};
