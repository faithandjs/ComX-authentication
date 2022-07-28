import React from 'react';
import { Link, navigate } from 'gatsby';
import useNewContext from '@/context/context';
import { BILProps, typeOption, formWrapper } from 'type';

const FormWrapper = ({
  children,
  nextLink,
  type,
  level,
  obj,
  canG0,
}: formWrapper) => {
  const { setting, settingFinal, handleSubmit } = useNewContext();
  
  return (
    <form
      action=" "
      onSubmit={(e) => {
        e.preventDefault();
        level === 2 && setting({ value2: obj });
        handleSubmit(type);
        // if (canG0 !== false) navigate(nextLink);
      }}
    >
      {children}
      <div className={`steps ${level !== 3 ? 'center' : ''}`}>
        {level === 2 && (
          <button type="submit" className="orange">
            VERIFY ACCOUNT
          </button>
        )}
        {level !== 2 && (
          <button
            type="button"
            className="orange"
            onClick={() => {
              level === 1 && setting({ value1: obj });
            }}
          >
            <Link to={nextLink!}>NEXT PAGE</Link>
          </button>
        )}
      </div>
    </form>
  );
};

export default FormWrapper;
