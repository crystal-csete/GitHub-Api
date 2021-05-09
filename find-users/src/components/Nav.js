import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button } from "antd";
import { HomeOutlined, SearchOutlined, LoginOutlined, QuestionCircleOutlined, SmileOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import Octocat from "../assets/Octocat.png";

// other components
import Footer from "./Footer";
import User from "./User";
import Home from "./Home";
import SignIn from './SignIn';
import Support from './Support';
import Links from './Links';

const Nav = () => {
  const [top, setTop] = useState(10);

  return (
    <Router>
      <div>
        <div>
          <nav
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "0.5rem",
              background: 'rgba(255, 255, 255, 0.7)',
              borderBottom: '2px solid black'
            }}
          >
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <li>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <img
                    style={{ width: "4rem", height: "4rem", marginLeft: '2rem' }}
                    src={Octocat}
                    alt=" logo"
                  />
                </a>
              </li>
              <li>
                <Button
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    background: "rgba(45,45,45, 0.8)",
                    borderRadius: "6px",
                    margin: '0 3rem'
                  }}
                  type="link"
                  onClick={() => setTop(top + 10)}
                >
                  <Link to="/"> <HomeOutlined /> Home</Link>
                </Button>
              </li>
              <li>
                <Button
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    background: "rgba(45,45,45, 0.8)",
                    borderRadius: "6px",
                    margin: "1rem",
                    textAlign: 'center',
                  }}
                  type="link"
                  onClick={() => setTop(top + 10)}
                >
                  <Link to="/user"> <SearchOutlined /> GitHub Users</Link>
                </Button>
              </li>
              <li>
                <Button
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    background: "rgba(45,45,45, 0.8)",
                    borderRadius: "6px",
                    margin: "1rem",
                    textAlign: 'center',
                  }}
                  type="link"
                  onClick={() => setTop(top + 10)}
                >
                  <Link to="/signin"> <LoginOutlined /> Sign In</Link>
                </Button>
              </li>
              <li>
                <Button
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    background: "rgba(45,45,45, 0.8)",
                    borderRadius: "6px",
                    margin: "1rem",
                    textAlign: 'center',
                  }}
                  type="link"
                  onClick={() => setTop(top + 10)}
                >
                  <Link to="/support"> <QuestionCircleOutlined /> Support</Link>
                </Button>
              </li>
              <li>
                <Button
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    background: "rgba(45,45,45, 0.8)",
                    borderRadius: "6px",
                    margin: "1rem",
                    textAlign: 'center',
                  }}
                  type="link"
                  onClick={() => setTop(top + 10)}
                >
                  <Link to="/account"> <SmileOutlined /> Links</Link>
                </Button>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/account">
              <Links />
            </Route>
            <Route path="/support">
              <Support />
            </Route>
          <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Nav;
