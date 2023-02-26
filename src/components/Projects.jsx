import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import todolistImg from "../assets/todolist-screenshot.png";
import insuranceImg from "../assets/insurance-agency-screenshot.png";

const Projects = () => {
  return (
    <section className="border-bottom" id="projects">
      <div className="projects-page">
        <h1 style={{ paddingTop: "100px" }}>Projects I’ve Worked On</h1>
        <div>
          <div
            style={{
              display: "flex",
              paddingTop: "100px",
              justifyContent: "space-between",
            }}
          >
            <img src={todolistImg} width="650" height="400" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "100px",
              }}
            >
              <h2 style={{ fontSize: "40px", margin: 0 }}>Todo List App</h2>
              <p style={{ maxWidth: "500px" }}>
                The Todo List app on React helps users keep track of tasks in
                three sections - To Do, Done, and Trash. It allows adding,
                editing, and deleting tasks with the option to filter and sort
                them by status, helping users stay organized and productive.
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "200",
                }}
              >
                &#10026; In this ToDo List pet project, I utilized the useState
                and useEffect Hooks provided by React to manage state and handle
                side effects, and implemented the JavaScript filter method to
                filter tasks based on their status, enabling users to easily
                sort and view their tasks based on their current status, making
                it easier to manage their workload.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              paddingTop: "100px",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingRight: "100px",
              }}
            >
              <h2 style={{ fontSize: "40px", margin: 0 }}>Insurance Agency</h2>
              <p
                style={{
                  maxWidth: "500px",
                }}
              >
                My insurance agency project is a React-based web application
                that features a pricing section, where users can compare and
                choose insurance plans. Using the Axios library, the pricing
                section maps the values and displays them in a user-friendly
                manner. This project offers an efficient and user-friendly
                solution for individuals seeking reliable insurance services.
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "200",
                }}
              >
                &#10026; My React-based insurance agency pet-project features a
                user-friendly interface for comparing and selecting insurance
                plans, utilizing React components, hooks, and router for optimal
                performance.
              </p>
            </div>
            <img src={insuranceImg} width="650" height="400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
