import { useRef, useState } from "react";

const Login = () => {
  const [emailIsInvalid, setEmailIsInvalid] = useState();
  const [passwordIsInvalid, setPasswordIsInvalid] = useState();

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
    } else {
      setEmailIsInvalid(false);
    }

    const passwordIsValid = passwordRegex.test(enteredPassword);

    if (!passwordIsValid) {
      setPasswordIsInvalid(true);
    } else {
      setPasswordIsInvalid(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control ">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email message...</p>}
          </div>
        </div>

        <div
          className={`control password-input ${
            passwordIsInvalid ? "with-error" : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
          <div className="control-error">
            {passwordIsInvalid && (
              <p>
                Password must contain at least one letter, one digit, and be at
                least 6 characters long.
              </p>
            )}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
};

export default Login;
