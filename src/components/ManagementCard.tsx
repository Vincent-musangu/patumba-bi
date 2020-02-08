import React, { Fragment } from "react";
import "../css/cards.css";
import excel from "../images/Microsoft-Excel-2013-icon.png";
import { Link } from "react-router-dom";
import { TableProps } from "./Table";

interface ManagementCardProps {
  link: string;
  title: string;
  tableProps?: TableProps;

}

const ManagementCard: React.FC<ManagementCardProps> = props => {
  return (
    <Fragment>
      <Link to={{ pathname: props.link, state: props.tableProps }} style={{ textDecoration: "none" }} >
        <div className="card 2">
          <img className="card_image" src={excel} alt="report" />
          <div className="card_title title-white">
            <p>{props.title}</p>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default ManagementCard;
