import React from "react";
import StarIcon from "@atlaskit/icon/glyph/star";
import CreateIcon from "@atlaskit/icon/glyph/add";
import SearchIcon from "@atlaskit/icon/glyph/search";
import HelpIcon from "@atlaskit/icon/glyph/question-circle";
import Avatar from "@atlaskit/avatar";
import { GlobalNav } from "@atlaskit/navigation-next";
// import { StrideWordmark } from "@atlaskit/logo";

const GlobalNavigation: React.FC = () => {
	return (
		<div>
			<GlobalNav
				primaryItems={[
					{
						icon: StarIcon,
						id: "star",
						tooltip: "Starred and recent",
						onClick: () => console.log("Search item clicked")
					},
					{
						icon: SearchIcon,
						id: "search",
						tooltip: "Search",
						onClick: () => console.log("Search item clicked")
					},
					{
						icon: CreateIcon,
						id: "create",
						tooltip: "Create",
						onClick: () => console.log("Create item clicked")
					}
				]}
				secondaryItems={[
					{
						icon: HelpIcon,
						id: "help",
						onClick: () => console.log("Help item clicked"),
						tooltip: "Help"
					},
					{
						component: ({ className, onClick }: any) => (
							<span className={className}>
								<Avatar
									borderColor="transparent"
									isActive={false}
									isHover={false}
									size="small"
									onClick={onClick}
								/>
							</span>
						),
						icon: null,

						id: "profile",
						onClick: () => console.log("Profile item clicked"),
						tooltip: "Profile"
					}
				]}
			/>
		</div>
	);
};

export default GlobalNavigation;
