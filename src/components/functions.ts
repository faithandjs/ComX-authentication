import { personalEvalProp, confirmPasswordProp } from 'type';
//checks format for every input and displays erro
export const personalEval = ({
  selector,
  name,
  select = false,
  alph = false,
  num = false,
  otp = false,
}: personalEvalProp) => {
  const elem_box = document.querySelector(selector)!;
  const elem_input: HTMLInputElement | HTMLSelectElement = select
    ? document.querySelector(selector + ' select')!
    : document.querySelector(selector + ' input')!;
  const elem_span = document.querySelector(selector + ' span')!;
  const classList = elem_box.classList;
  const input_type = elem_input.type;
  const value = elem_input.value.trim();
  let format;
  if (value.length === 0) {
    elem_box.setAttribute('class', classList + ' error');
    elem_span.textContent = name + ' is required';
    return false;
  } else if (
    input_type === 'number' ||
    input_type === 'text' ||
    input_type === 'email'
  ) {
    if (input_type === 'text' && num) {
      format = /^[0-9]+$/;
      if (value.match(format)) {
        elem_box.classList.remove('error');
        return true;
      } else {
        elem_box.setAttribute('class', classList + ' error');
        elem_span.textContent = name + ' is invalid';
        return false;
      }
    }
    if (input_type === 'text' && !num && !otp) {
      format = alph ? /^[a-zA-Z0-9]+$/ : /^[A-Za-z]+$/;
      if (value.match(format)) {
        elem_box.classList.remove('error');
        return true;
      } else {
        elem_box.setAttribute('class', classList + ' error');
        elem_span.textContent = name + ' is invalid';
        return false;
      }
    }
    if (input_type === 'email') {
      format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (value.match(format)) {
        elem_box.classList.remove('error');
        return true;
      } else {
        elem_box.setAttribute('class', classList + ' error');
        elem_span.textContent = 'Email is invalid';
        return false;
      }
    }
    if (input_type === 'text' && otp) {
      if (value.length === 4) {
        elem_box.classList.remove('error');
        return true;
      } else {
        elem_box.setAttribute('class', classList + ' error');
        elem_span.textContent = 'Enter your 4 digit code';
        return false;
      }
    }
    return true;
  } else if (elem_box.classList.contains('error')) {
    elem_box.classList.remove('error');
    return true;
  } else {
    return true;
  }
};
export const confirmPassword = ({
  password_selector,
  confirm_selector,
}: confirmPasswordProp) => {
  const pwd_box = document.querySelector(password_selector)!;
  const cpwd_box = document.querySelector(confirm_selector)!;
  const pwd_input: HTMLInputElement = document.querySelector(
    password_selector + ' input',
  )!;
  const cpwd_input: HTMLInputElement = document.querySelector(
    confirm_selector + ' input',
  )!;

  const pwd_span = document.querySelector(password_selector + ' span')!;
  const pwd_classList = pwd_box.classList;
  const cpwd_span = document.querySelector(confirm_selector + ' span')!;
  const cpwd_classList = cpwd_box.classList;
  const password = pwd_input.value.trim();
  const confirm = cpwd_input.value.trim();

  if (confirm.length < 1) {
    cpwd_box.setAttribute('class', cpwd_classList + ' error');
    cpwd_span.textContent = 'Confirm Password is required';
    return false;
  } else if (password !== confirm) {
    cpwd_box.setAttribute('class', cpwd_classList + ' error');
    cpwd_span.textContent = 'Password does not match';
    return false;
  } else if (cpwd_classList.contains('error')) {
    cpwd_classList.remove('error');
    return true;
  } else {
    return true;
  }
};
//takes an array and calls personalEval & confirmPassword where necessary
export const evaluate = (
  array: personalEvalProp[] | (confirmPasswordProp | personalEvalProp)[],
) => {
  array.map((item: personalEvalProp | confirmPasswordProp, index) => {
    if (item.selector === null) {
      confirmPassword(item);
    }
    if (item.selector !== null) {
      personalEval(item);
    }
  });
};
//takes an array and calls personalEval & confirmPassword where necessary
//returns a boolean value
export const validate = (
  array: personalEvalProp[] | (confirmPasswordProp | personalEvalProp)[],
) => {
  let status: boolean = false;
  array.map((item: personalEvalProp | confirmPasswordProp, index) => {
    if (item.selector === null) {
      if (index === 0) {
        status = confirmPassword(item);
      } else {
        status = status && confirmPassword(item);
      }
    } else if (item.selector !== null) {
      if (index === 0) {
        status = personalEval(item);
      } else {
        status = status && personalEval(item);
      }
    }
  });
  return status;
};
