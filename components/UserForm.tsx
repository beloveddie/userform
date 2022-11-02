import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      {emailError && <Alert variant="danger">{emailError}</Alert>}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
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
      {passwordError && <Alert variant="danger">{passwordError}</Alert>}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UserForm;
