import React, { useState } from "react";
import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";

import Form, { Field, ErrorMessage, FormFooter, HelperMessage, ValidMessage } from "@atlaskit/form";
import { ContextConsumer } from "../App";
export const SignIn: React.FC = () => {
  return (
    <ContextConsumer>
      {context =>
        context && (
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
              Sign In
            </h1>
            <Form onSubmit={context.handleSubmmit}>
              {({ formProps, submitting }) => (
                <form {...formProps}>
                  <Field name="email" label="Email" isRequired validate={value => context.setEmail(value)}>
                    {({ fieldProps, error }) => (
                      <>
                        <TextField
                          autoComplete="on"
                          {...fieldProps}
                          placeholder="email e.g example@hobbiton.co.zm"
                        />
                        {!error && <HelperMessage>your email must contain @ symbol</HelperMessage>}
                      </>
                    )}
                  </Field>

                  <Field
                    name="password"
                    label="Password"
                    defaultValue=""
                    isRequired
                    validate={value => context.setPassword(value)}
                  >
                    {({ fieldProps, error }) => (
                      <>
                        <TextField type="password" {...fieldProps} placeholder=" password" />

                        {context.status === 401 && <ErrorMessage>invalid credentials</ErrorMessage>}
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
        )
      }
    </ContextConsumer>
  );
};
