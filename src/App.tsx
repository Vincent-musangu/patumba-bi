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
	// withRouter
} from "react-router-dom";
import Airtel from "./pages/Airtel";
import Zamtel from "./pages/Zamtel";
import MTN from "./pages/MTN";
import Sacco from "./pages/Sacco";
const NavProvider: React.FC = () => {
	// let match = useRouteMatch("/");
	return (
		<Fragment>
			<BrowserRouter>
				<NavigationProvider>
					<LayoutManager
						globalNavigation={Globalnavi}
						productNavigation={ProductNav}
						containerNavigation={ContainerNavigator}
					>
						<div style={{ padding: "32px 40px" }}>
							<Switch>
								<Route path="/airtel" component={Airtel} />
								<Route path="/zamtel" component={Zamtel} />
								<Route path="/mtn" component={MTN} />
								<Route path="/sacco" component={Sacco} />
								<Route
									exact
									path="/"
									render={() => <Redirect to="/zamtel" />}
								/>
							</Switch>
						</div>
					</LayoutManager>
				</NavigationProvider>
			</BrowserRouter>
		</Fragment>
	);
};

export default NavProvider;
