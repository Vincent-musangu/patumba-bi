import { RouteComponentProps, Route, Redirect } from "react-router-dom";
import React from "react";
import { ContextConsumer } from "../App";

export enum NonAthedRoute {
  login = "/signin"
}
interface Props {
  Component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
}
export const AuthRoute = ({ Component, path, exact = false }: Props) => {
  const message = "please log in to view this page";
  return (
    <ContextConsumer>
      {context =>
        context && (
          <Route
            exact={exact}
            path={path}
            render={(props: RouteComponentProps) =>
              context.auth ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: NonAthedRoute.login,
                    state: {
                      message,
                      requstedPath: path
                    }
                  }}
                />
              )
            }
          />
        )
      }
    </ContextConsumer>
  );
};
