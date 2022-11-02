import { ValidatorReturnType } from "./emailValidator";

export const passwordValidator = (password: string): ValidatorReturnType => {
  let message = "",
    isValid = false;

  if (password.length === 0) {
    message = "Password is required";
  } else if (password.length < 5) {
    message = "Password should be minimum 8 characters";
  } else {
    message = "";
    isValid = true;
  }
  return { message, isValid };
};
