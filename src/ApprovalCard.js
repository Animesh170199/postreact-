import React from "react";

function ApprovalCard(props) {
  return (
    <div className="UICard">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="UI two buttons ">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
}

export default ApprovalCard;
