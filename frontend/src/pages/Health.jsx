import React from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import moment from "moment";

function Health(props) {
  return (
    <PageTemplate title="Status">
      {props.status && (
        <div>
          <p className={"date"}>Date: {moment().format("YYYY-MM-DD HH:mm")}</p>
          <h2 className={"temp"}>Status: {props.status}</h2>
        </div>
      )}
    </PageTemplate>
  );
}

export default Health;
