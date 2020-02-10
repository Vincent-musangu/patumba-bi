import React, { Fragment } from "react";
import { NavigationProvider, LayoutManager } from "@atlaskit/navigation-next";
import Globalnavi from "../src/navigation/GlobalNav";
import { ContainerNavigator } from "../src/navigation/ContainerNav";
import ProductNav from "../src/navigation/ProductNav";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Airtel from "./pages/Airtel";
import Zamtel from "./pages/Zamtel";
import MTN from "./pages/MTN";
import Sacco from "./components/Sacco";
import { ZamtelSec, AirtelSec, MtnSec } from "./components/Sec";
import { SecLayout } from "./data/sec/secLayoutdata";
import { ZamtelMonthlyUnitPrice, AirtelMonthlyUnitPrice, MtnMonthlyUnitPrice } from "./components/MonthlyUnits";
import { ZamtelDailyUnitPrice, AirtelDailyUnitPrice, MtnDailyUnitPrice } from "./components/DailyUnitPrice";
// import axios from "axios"


const NavProvider: React.FC = () => {



  return (


    <Fragment>
      <BrowserRouter>
        <NavigationProvider>
          <LayoutManager
            globalNavigation={Globalnavi}
            productNavigation={ProductNav}
            containerNavigation={ContainerNavigator}
          >
            {console.log("loging row", SecLayout("zamtel", "sec"))}
            {/* {console.log(" rows", rows)} */}
            <div style={{ padding: "32px 40px" }}>
              <Switch>

                <Route exact path="/zamtel" component={Zamtel} />
                <Route path="/zamtel" >
                  <Route exact path="/zamtel/sacco" component={Sacco} />
                  <Route exact path="/zamtel/sec-reports" component={ZamtelSec} />
                  <Route exact path="/zamtel/daily-units" render={() => <ZamtelDailyUnitPrice />} />
                  <Route exact path="/zamtel/monthly-units" component={ZamtelMonthlyUnitPrice} />
                </Route>
                <Route exact path="/airtel" component={Airtel} />
                <Route path="/airtel">
                  <Route exact path="/airtel/sacco" component={Sacco} />
                  <Route exact path="/airtel/sec-reports" component={AirtelSec} />
                  <Route exact path="/airtel/daily-units" render={() => <AirtelDailyUnitPrice />} />
                  <Route exact path="/airtel/monthly-units" component={AirtelMonthlyUnitPrice} />
                </Route>
                <Route exact path="/mtn" component={MTN} />
                <Route path="/mtn">
                  <Route exact path="/mtn/sacco" component={Sacco} />
                  <Route exact path="/mtn/sec-reports" component={MtnSec} />
                  <Route exact path="/mtn/daily-units" render={() => <MtnDailyUnitPrice />} />
                  <Route exact path="/mtn/monthly-units" component={MtnMonthlyUnitPrice} />
                </Route>
                <Redirect from="/" to="/zamtel" />

              </Switch>
            </div>
          </LayoutManager>
        </NavigationProvider>
      </BrowserRouter>

    </Fragment>
  );
};

export default NavProvider;
