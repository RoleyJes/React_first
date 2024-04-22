import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import React from "react";
import "../App.css";

function RepoDetails() {
  const { id } = useParams();
  const [repoDetails, setRepoDetails] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/repos/RoleyJes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRepoDetails(data);
      });
  }, [id]);

  return (
    <div className="detailsCont">
      <div div className="repoDetailsSection">
        <section>
          <h1>{repoDetails.name}</h1>
          <p>
            <span className="repoDetailTitle">Full name:</span>{" "}
            {repoDetails.full_name}
          </p>
          <p>
            <span className="repoDetailTitle">Visibility:</span>{" "}
            {repoDetails.visibility}
          </p>
          <p>
            <span className="repoDetailTitle"> Main Language:</span>{" "}
            {repoDetails.language === null ? "None" : repoDetails.language}
          </p>
          <p>
            <span className="repoDetailTitle"> License:</span>{" "}
            {repoDetails.license === null ? "None" : repoDetails.license}
          </p>
          <p>
            <span className="repoDetailTitle">Default branch:</span>{" "}
            {repoDetails.default_branch}
          </p>
          <p>
            <span className="repoDetailTitle">Date created:</span>{" "}
            {repoDetails.created_at}
          </p>
          <p>
            <span className="repoDetailTitle">Date pushed:</span>{" "}
            {repoDetails.pushed_at}
          </p>
          <p>
            <span className="repoDetailTitle">Date updated:</span>{" "}
            {repoDetails.updated_at}
          </p>
          <p>
            <span className="repoDetailTitle">Open issues:</span>{" "}
            {repoDetails["open_issues"]}
          </p>
          <p>
            <span className="repoDetailTitle">HTML url:</span>{" "}
            {repoDetails.html_url}
          </p>

          <p>
            <span className="repoDetailTitle">Stars:</span>{" "}
            {repoDetails.stargazers_count}
          </p>
          <p>
            <span className="repoDetailTitle">Watch:</span>{" "}
            {repoDetails.watchers}
          </p>
          <p>
            <span className="repoDetailTitle">Forks:</span> {repoDetails.forks}
          </p>

          {/* Button to view repo on github */}
          <div className="buttondiv">
            <button className="viewBtn">
              <a
                href={`https://github.com/${repoDetails.full_name}`}
                target="_blank"
                rel="noreferrer"
                className="">
                View on Github
              </a>
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default RepoDetails;
