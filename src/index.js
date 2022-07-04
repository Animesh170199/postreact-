import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from "./commentDetail";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";
import "./App.css";
const App = () => {
  return (
    <div className="ui container comments ">
      <ApprovalCard>
        <h3>Warning!!!</h3>
        Are you sure you want to do this?{" "}
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 8:00AM "
          ctext="I AM HAPPY TODAY"
          images={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Raghav"
          timeAgo="Today at 4:20PM "
          ctext="siuuu ronaldo 77777 "
          images={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="flexi"
          timeAgo="yesterday at 8:00PM "
          ctext="World cup 2022 qatar"
          images={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 12:00AM "
          ctext="Neo logistics mean much more than "
          images={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="dante"
          timeAgo="yesterday at 2:40PM "
          ctext="How is everyone here ? "
          images={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

