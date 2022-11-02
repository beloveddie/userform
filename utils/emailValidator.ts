export interface ValidatorReturnType {
  message: string;
  isValid: boolean;
}

export const emailValidator = (email: string): ValidatorReturnType => {
  let message = "",
    isValid = false;
  if (email.length === 0) {
    message = "Email is required";
  } else if (email.length < 6) {
    message = "Email should be minimum 6 characters";
  } else if (email.indexOf(" ") >= 0) {
    message = "Email cannot contain spaces";
  } else {
    message = "";
    isValid = true;
  }

  return { message, isValid };
};
