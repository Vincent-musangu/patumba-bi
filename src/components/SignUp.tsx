import React, { useState } from "react";
import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import Select from "@atlaskit/select";

import Form, { Field, ErrorMessage, FormFooter, HelperMessage, ValidMessage } from "@atlaskit/form";
import axios from "axios";
import { history } from "../App";
export const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [role, setRole] = useState<string>();

  // console.log(data);
  const handleSubmmit = () => {
    axios
      .post(
        "http://localhost:5000/auth/signup",

        { username, password, email, role }
      )
      .then(res => (res.data === 201 ? history.push("/") : null))
      .catch(err => console.log(err.massage));
  };
  // const roles = [
  //   { label: "Super-Admin", value: "Super-Admin" },
  //   { label: "Admin", value: "Admin" },
  //   { label: "Co-Admin", value: "Co-Admin" }
  // ];

  return (
    <div
      style={{
        display: "flex",
        width: "400px",
        maxWidth: "100%",
        margin: "0 auto",
        flexDirection: "column"
      }}
    >
      {" "}
      <h1
        style={{
          color: "#666"
        }}
      >
        Create User
      </h1>
      <Form onSubmit={handleSubmmit}>
        {({ formProps, submitting }) => (
          <form {...formProps}>
            <Field name="email" label="Email" isRequired validate={value => setEmail(value)}>
              {({ fieldProps, error }) => (
                <>
                  <TextField
                    autoComplete="on"
                    {...fieldProps}
                    placeholder="email eg example@hobbiton.co.zm"
                  />
                  {!error && <HelperMessage>You can use letters, numbers & periods.</HelperMessage>}
                  {error && <ErrorMessage>This user name is already in use, try another one.</ErrorMessage>}
                </>
              )}
            </Field>
            <Field name="username" label="User name" isRequired validate={value => setUsername(value)}>
              {({ fieldProps, error }) => (
                <>
                  <TextField autoComplete="on" {...fieldProps} placeholder="enter username" />
                  {!error && <HelperMessage>You can use letters, numbers & periods.</HelperMessage>}
                  {error && <ErrorMessage>This user name is already in use, try another one.</ErrorMessage>}
                </>
              )}
            </Field>
            {/* <Field
              name="role"
              isRequired
              defaultValue="Admin"
              label="user role"
              validate={value => setRole(value)}
            >
              {({ fieldProps }: any) => (
                <>
                  <Select
                    {...fieldProps}
                    options={roles.map(roles => roles.value)}
                    placeholder="Choose a role"
                  ></Select>
                </>
              )}
            </Field> */}

            <Field
              name="password"
              label="Password"
              defaultValue=""
              isRequired
              validate={value => setPassword(value)}
            >
              {({ fieldProps, error, valid, meta }) => (
                <>
                  <TextField type="password" {...fieldProps} placeholder=" password" />
                  {!error && !valid && (
                    <HelperMessage>
                      Use 8 or more characters with a mix of letters, numbers & symbols.
                    </HelperMessage>
                  )}
                  {error && <ErrorMessage>Password needs to be more than 8 characters.</ErrorMessage>}
                  {valid && meta.dirty ? <ValidMessage>Awesome password!</ValidMessage> : null}
                </>
              )}
            </Field>
            <FormFooter>
              <Button appearance="primary" type="submit" isLoading={submitting}>
                Create account
              </Button>
            </FormFooter>
          </form>
        )}
      </Form>
    </div>
  );
};
