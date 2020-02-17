import React, { useState } from "react";
import axios from "axios";
import Avatar from "@atlaskit/avatar";
import createHistory from "history/createBrowserHistory";
import { NavigationProvider, LayoutManager } from "@atlaskit/navigation-next";
import Globalnavi from "../src/navigation/GlobalNav";
import { ContainerNavigator } from "../src/navigation/ContainerNav";
import ProductNav from "../src/navigation/ProductNav";
import { Router, Route, Switch, RouteComponentProps } from "react-router-dom";
import Airtel from "./pages/Airtel";
import Zamtel from "./pages/Zamtel";
import MTN from "./pages/MTN";
import Sacco from "./components/Sacco";
import { ZamtelSec, AirtelSec, MtnSec } from "./components/Sec";
import {
  ZamtelMonthlyUnitPrice,
  AirtelMonthlyUnitPrice,
  MtnMonthlyUnitPrice
} from "./components/MonthlyUnits";
import { ZamtelDailyUnitPrice, AirtelDailyUnitPrice, MtnDailyUnitPrice } from "./components/DailyUnitPrice";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { AuthRoute } from "./routes/Roles";
export const contextProvider = React.createContext<any>(null);
export const ContextConsumer = contextProvider.Consumer;
export const history = createHistory();
const NavProvider: React.FC = (): JSX.Element => {
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [auth, setAuth] = useState<boolean>();
  const [status, setStatus] = useState<string>();
  const [credentials, setCredentials] = useState<{ userName: string }>();
  // interface resData {
  //   userRole: string;
  //   userName: string;
  // }
  // interface userData {
  //   isAuth: boolean;
  //   userData: resData;
  // }
  const handleSubmmit = () => {
    axios
      .post(
        "http://localhost:5000/auth/signin",

        { password, email }
      )
      .then(res => {
        if (res.data.statusCode === 201) {
          // const toStarage=JSON.stringify(AppContext.auth)
          // localStorage.setItem("trish", myObjectJson);
          // const localData = {
          //   isAuth: true,
          //   userData: res.data
          // };
          // const toStarage = JSON.stringify(localData);
          // localStorage.setItem(
          //   "userdata",
          //   JSON.stringify({
          //     isAuth: true,
          //     userData: res.data
          //   })
          // );

          // const newMyObjectJSON = localStorage.getItem("userdata");

          setAuth(true);
          setCredentials(res.data);
          history.push("/");
        } else if (res.data.statusCode === 401) {
          setAuth(false);
          setStatus(res.data.statusCode);
          // console.log(res.data.statusCode);
        } else {
          setStatus(res.data.statusCode);
        }
      });
    // console.log("2", auth);
  };
  console.log(credentials);

  const AppContext = {
    // roles: credentials?.userRole,
    handleSubmmit,
    setPassword,
    setEmail,
    setAuth,
    auth,
    email,
    status
  };

  return (
    <contextProvider.Provider value={AppContext}>
      <>
        {auth ? (
          <div
            style={{
              float: "right",
              display: "flex ",
              margin: "30px"
            }}
          >
            {" "}
            <h5 style={{ color: "#666", margin: "10px auto" }}>{credentials?.userName} </h5>
            <Avatar name="medium" size="medium" presence="online" />{" "}
          </div>
        ) : null}

        <Router history={history}>
          <NavigationProvider>
            <LayoutManager
              globalNavigation={Globalnavi}
              productNavigation={ProductNav}
              containerNavigation={ContainerNavigator}
            >
              <div style={{ padding: "32px 40px" }}>
                <Switch>
                  <AuthRoute exact path="/" Component={Zamtel} />

                  <AuthRoute exact path="/zamtel" Component={Zamtel} />

                  {/* <AuthRoute exact path="/zamtel/sacco" Component={Sacco} /> */}
                  <AuthRoute exact path="/zamtel/sec-reports" Component={ZamtelSec} />
                  <AuthRoute exact path="/zamtel/daily-units" Component={ZamtelDailyUnitPrice} />
                  <AuthRoute exact path="/zamtel/monthly-units" Component={ZamtelMonthlyUnitPrice} />

                  <AuthRoute exact path="/airtel" Component={Airtel} />

                  <AuthRoute exact path="/airtel/sec-reports" Component={AirtelSec} />
                  <AuthRoute exact path="/airtel/daily-units" Component={AirtelDailyUnitPrice} />
                  <AuthRoute exact path="/airtel/monthly-units" Component={AirtelMonthlyUnitPrice} />

                  <AuthRoute exact path="/mtn" Component={MTN} />
                  <AuthRoute exact path="/zamtel" Component={Zamtel} />
                  <AuthRoute exact path="/zamtel/sacco" Component={Sacco} />
                  <AuthRoute exact path="/mtn/sec-reports" Component={MtnSec} />
                  <AuthRoute exact path="/mtn/daily-units" Component={MtnDailyUnitPrice} />
                  <AuthRoute exact path="/mtn/monthly-units" Component={MtnMonthlyUnitPrice} />
                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/signin" component={SignIn} />
                </Switch>
              </div>
            </LayoutManager>
          </NavigationProvider>
        </Router>
      </>
    </contextProvider.Provider>
  );
};

export default NavProvider;
