import React, { Fragment } from "react";
import { AtlassianWordmark } from "@atlaskit/logo";
// import uu from "../images/jhjh.png";
import {
	GroupHeading,
	HeaderSection,
	Item,
	// LayoutManager,
	MenuSection,
	// NavigationProvider,
	Separator,
	Wordmark
} from "@atlaskit/navigation-next";

const ProductNav: React.FC = () => {
	return (
		<Fragment>
			<HeaderSection>
				{({ className }: any) => (
					<div className={className}>
						<Wordmark wordmark={AtlassianWordmark} />
					</div>
				)}
			</HeaderSection>
			<MenuSection>
				{({ className }: any) => (
					<div className={className}>
						<Item text="Dashboard" />
						<Item text="Things" />
						<Item text="Settings" />
						<Separator />
						<GroupHeading>Add-ons</GroupHeading>
						<Item text="My plugin" />
					</div>
				)}
			</MenuSection>
		</Fragment>
	);
};

export default ProductNav;
