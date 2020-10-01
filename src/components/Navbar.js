import React from "react";
import { Link } from "gatsby";
import logo from "../img/assets/swasthforclincian-logo@3x.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active"
          })
          : this.setState({
            navBarActiveClass: ""
          });
      }
    );
  };

  render() {
    return (
      <>
      {/*  <img
          className='header-bg-img'
          src={topBack} />*/}
        <nav
          className={`navbar`}
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <a href='/' className="navbar-item" title="Logo">
                <img src={logo} className='header-logo' alt="Kaldi" style={{ width: "88px" }}/>
              </a>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span/>
                <span/>
                <span/>
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-end has-text-centered">
                <a className="navbar-item transparent-btn base-text" href='https://clinician.swasth.co/'>
                  Clinician
                </a>
              </div>{this.props.isClient ?
              <div className="navbar-end has-text-centered">
                <Link className="navbar-item transparent-btn coach-btn base-text" to='/coach'>
                  I am a Coach
                </Link>
              </div> :
                <div className="navbar-end has-text-centered">
                  <Link className="navbar-item transparent-btn client-btn base-text" to='/client'>
                    I am a Client
                  </Link>
                </div>}
            </div>
          </div>
        </nav>
       {/* {transparent ? "" :
          <div
            className="full-width-image margin-top-0 header-back"
            style={{ backgroundImage: `url(${topBack})`, height: "calc(100vh - 375px)" }} />}*/}
            {/*  <img src={bannerIcon} className="home-back-icon"/> */}
      </>
    );
  }
};

export default Navbar;
