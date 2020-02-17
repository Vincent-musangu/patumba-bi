import React from "react";
import { GlobalNav } from "@atlaskit/navigation-next";
import { Link } from "react-router-dom";
import { ContextConsumer } from "../App";
import { IoIosLogIn, IoMdPersonAdd, IoMdHome, IoIosLogOut } from "react-icons/io";
const GlobalNavigation: React.FC = () => {
  return (
    <ContextConsumer>
      {context =>
        context && (
          <div>
            <GlobalNav
              primaryItems={[
                {
                  component: ({ className, onClick }: any) => (
                    <Link to="/">
                      <span className={className}>
                        <IoMdHome size={25} />
                      </span>
                    </Link>
                  ),
                  icon: null,
                  id: "help",
                  tooltip: "Help"
                }
                // {
                // 	icon: SearchIcon,
                // 	id: "search",
                // 	tooltip: "Search",
                // 	onClick: () => console.log("Search item clicked")
                // },
                // {
                // 	icon: CreateIcon,
                // 	id: "create",
                // 	tooltip: "Create",
                // 	onClick: () => console.log("Create item clicked")
                // }
              ]}
              secondaryItems={[
                {
                  component: ({ className, onClick }: any) =>
                    !context.auth ? (
                      <Link to="/signin">
                        <span className={className}>
                          <IoIosLogIn size={25} />
                        </span>
                      </Link>
                    ) : (
                      <span className={className} onClick={() => context.setAuth(false)}>
                        <IoIosLogOut size={25} />
                      </span>
                    ),
                  icon: null,
                  id: "help",
                  tooltip: "Help"
                },
                {
                  component: ({ className, onClick }: any) => (
                    <Link to="/signup">
                      <span className={className}>
                        <IoMdPersonAdd size={25} />
                      </span>
                    </Link>
                  ),
                  icon: null,

                  id: "profile",
                  onClick: () => console.log("Profile item clicked"),
                  tooltip: "Profile"
                }
              ]}
            />
          </div>
        )
      }
    </ContextConsumer>
  );
};

export default GlobalNavigation;
