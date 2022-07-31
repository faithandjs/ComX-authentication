import React from 'react';
import { Link, navigate } from 'gatsby';
import useNewContext from '@/context/context';
import { BILProps, typeOption, formWrapper } from 'type';
import { evaluate, validate } from './functions';

const FormWrapper = ({
  children,
  nextLink,
  type,
  level,
  obj,
  evalProps,
}: formWrapper) => {
  const { setting, settingFinal, handleRegister } = useNewContext();

  return (
    <form
      action=" "
      onSubmit={(e) => {
        e.preventDefault();
        if (validate(evalProps!)) {
          if (handleRegister(type)) navigate(nextLink);
        } else {
          evaluate(evalProps!);
        }
      }}
    >
      {children}
      <div className={`steps ${level !== 3 ? 'center' : ''}`}>
        {level === 2 && (
          <button
            type="submit"
            className="orange"
            onClick={() => {
              if (validate(evalProps!)) {
                setting({
                  value2: obj,
                });
              } else {
                evaluate(evalProps!);
              }
            }}
          >
            VERIFY ACCOUNT
          </button>
        )}
        {level === 1 && (
          <button
            type="button"
            className="orange"
            onClick={() => {
              if (validate(evalProps!)) {
                navigate(nextLink);
                setting({
                  value1: obj,
                });
              } else {
                evaluate(evalProps!);
              }
            }}
          >
            NEXT PAGE
          </button>
        )}
      </div>
    </form>
  );
};

export default FormWrapper;
