import React, { Fragment } from "react";

// import ShortcutIcon from "@atlaskit/icon/glyph/shortcut";

import {
	// GroupHeading,
	HeaderSection,
	Item,
	MenuSection,
	// Separator,
	ContainerHeader,
	ItemAvatar
} from "@atlaskit/navigation-next";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";

const ContainerNav: React.FC<RouteComponentProps> = (
	props: RouteComponentProps
) => {
	return (
		<Fragment>
			<HeaderSection>
				{({ css }: any) => (
					<div style={{ ...css, paddingBottom: 20 }}>
						<ContainerHeader
							before={(itemState: any) => (
								<ItemAvatar
									itemState={itemState}
									appearance="report"
									size="large"
								/>
							)}
							text="Patumba-BI"
							subText="MNO Report"
						/>
					</div>
				)}
			</HeaderSection>
			<MenuSection>
				{({ className }: any) => (
					<div className={className}>
						<Item
							text="Zamtel"
							onClick={() => props.history.push("/zamtel")}
							isSelected={props.location.pathname === "/zamtel"}
						/>
						<Item
							text="Aitel"
							onClick={() => props.history.push("/airtel")}
							isSelected={props.location.pathname === "/airtel"}
						/>
						<Item
							onClick={() => props.history.push("/mtn")}
							isSelected={props.location.pathname === "/mtn"}
							text="MTN"
						/>
						<Item
							onClick={() => props.history.push("/sacco")}
							isSelected={props.location.pathname === "/sacco"}
							text="SACCO"
						/>
					</div>
				)}
			</MenuSection>
		</Fragment>
	);
};

export const ContainerNavigator = withRouter(ContainerNav);
