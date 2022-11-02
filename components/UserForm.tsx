import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import styles from "../styles/UserForm.module.css";
import { emailValidator } from "../utils/emailValidator";
import { passwordValidator } from "../utils/passwordValidator";

const UserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    //   make use of utility functions for validation
    let { isValid: emailValid, message: emailErrMessage } =
        emailValidator(email),
      { isValid: passwordValid, message: passwordErrMessage } =
        passwordValidator(password);
    setEmailError(emailErrMessage);
    setPasswordError(passwordErrMessage);
    if (emailValid && passwordValid) {
      alert("Email: " + email + "\nPassword: " + password);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.form_cnt}>
      <Form.Group className={styles.form_group} controlId="formBasicEmail">
        <Form.Label className={styles.form_label}>Email address</Form.Label>
        <Form.Control
          className={styles.form_control}
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Form.Text className={styles.form_text}>
          We'll never share your email with anyone else.
        </Form.Text>
        {emailError && (
          <Alert variant="danger" className={styles.form_alert}>
            {emailError}
          </Alert>
        )}
      </Form.Group>

      <Form.Group className={styles.form_group} controlId="formBasicPassword">
        <Form.Label className={styles.form_label}>Password</Form.Label>
        <Form.Control
          className={styles.form_control}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Form.Text className={styles.form_text}>
          Hint 💁🏾‍♀️💡: strengthen your password.
        </Form.Text>
        {passwordError && (
          <Alert variant="danger" className={styles.form_alert}>
            {passwordError}
          </Alert>
        )}
      </Form.Group>
      <Button
        className={styles.form_submit_btn}
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default UserForm;
