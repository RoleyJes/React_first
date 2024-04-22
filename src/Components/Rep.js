import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import "./Rep.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Repoo = () => {
  const [repos, setRepos] = useState([]);
  const [reposPerPage, setReposPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/RoleyJes/repos")
      .then((res) => setRepos(res.data));
  }, []);

  const numOfTotalPages = Math.ceil(repos.length / reposPerPage);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;

  const visibleRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const prevPageHandler = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPageHandler = () => {
    if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="repoListSection">
      <div className="repoTableHeader">
        <p>Repository Name</p>
        <p>Visibility</p>
        <p>Language</p>
      </div>
      {visibleRepos.map((repo) => (
        <Link key={repo.id} to={`/repodetails/${repo.name}`}>
          <article className="repoListCont">
            <div>
              <p className="repoName">{repo.name}</p>
              <p>{repo.visibility}</p>
              <p>{repo.language === null ? "None" : repo.language}</p>
              <p className="detailsDot">...</p>
            </div>
          </article>
        </Link>
      ))}
      <div className="btnsCont">
        <span onClick={prevPageHandler}>Prev</span>
        <p>
          {pages.map((page) => (
            <span
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${
                currentPage === page ? "active" : ""
              }`}>{`${page} | `}</span>
          ))}
        </p>
        <span onClick={nextPageHandler}>Next</span>
      </div>
    </div>
  );
};

export default Repoo;
