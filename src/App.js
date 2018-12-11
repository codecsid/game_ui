import React from 'react';
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from '@rmwc/card';
import { Typography } from '@rmwc/typography';
import { TextField, TextFieldIcon, TextFieldHelperText } from '@rmwc/textfield';

// import { Grid, GridCell, GridInner } from '@rmwc/grid';
// import {
//   TopAppBar,
//   TopAppBarRow,
//   TopAppBarSection,
//   TopAppBarNavigationIcon,
//   TopAppBarActionItem,
//   TopAppBarTitle
// } from '@rmwc/top-app-bar';
class App extends React.Component {
    render(){
        const cardStyle = {
            height: "30rem",
            width: "25rem",
            marginTop:"50px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "100px"
        };
        return (
            <div className="mdl-layout__container">

            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">

              <div className="android-header mdl-layout__header mdl-layout__header--waterfall">
                <div className="mdl-layout__header-row">
                  <span className="android-title mdl-layout-title">
                    <img className="android-logo-image" src="images/android-logo.png"/>
                  </span>
                  {/*<!-- Add spacer, to align navigation to the right in desktop -->*/}
                  <div className="android-header-spacer mdl-layout-spacer"></div>
                  <div className="android-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
                    <label className="mdl-button mdl-js-button mdl-button--icon" for="search-field">
                      <i className="material-icons">search</i>
                    </label>
                    <div className="mdl-textfield__expandable-holder">
                      <input className="mdl-textfield__input" type="text" id="search-field"/>
                    </div>
                  </div>
                  {/*<!-- Navigation -->*/}
                  <div className="android-navigation-container">
                    <nav className="android-navigation mdl-navigation">
                      <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Phones</a>
                      <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Tablets</a>
                      <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Wear</a>
                      <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">TV</a>
                      <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Auto</a>
                      <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">One</a>
                      <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Play</a>
                    </nav>
                  </div>
                  <span className="android-mobile-title mdl-layout-title">
                    <img className="android-logo-image" src="images/android-logo.png"/>
                  </span>
                  <button className="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
                    <i className="material-icons">more_vert</i>
                  </button>
                  <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="more-button">
                    <li className="mdl-menu__item">5.0 Lollipop</li>
                    <li className="mdl-menu__item">4.4 KitKat</li>
                    <li disabled className="mdl-menu__item">4.3 Jelly Bean</li>
                    <li className="mdl-menu__item">Android History</li>
                  </ul>
                </div>
              </div>

                <div className="android-content mdl-layout__content">
                <a name="top"></a>
                <Card style={cardStyle}>
                    <Typography
                        tag="h5"
                        theme="text-secondary-on-background"
                        style={{ marginTop: '1rem', textAlign: "center"}}
                      >
                        Register
                      </Typography>
                    <br/>
                    <Typography
                        tag="h7"
                        theme="text-secondary-on-background"
                        style={{width:"75%", marginLeft: "auto", marginRight: "auto"}}
                      >
                        Team Name
                      </Typography>
                    <TextField style={{width:"75%", marginLeft: "auto", marginRight: "auto"}}label="Team Name"/>
                    <br/>
                    <Typography
                        tag="h7"
                        theme="text-secondary-on-background"
                        style={{width:"75%", marginLeft: "auto", marginRight: "auto"}}
                      >
                        Password
                      </Typography>
                    <TextField style={{width:"75%", marginLeft: "auto", marginRight: "auto"}}label="Password"/>
                    <br/>
                    <br/>
                    <br/>
                    <CardAction style={{width:"25%", marginLeft: "auto", marginRight: "auto"}}>Register</CardAction>
                </Card>
                <footer className="android-footer mdl-mega-footer">
                  <div className="mdl-mega-footer--top-section">
                    <div className="mdl-mega-footer--left-section">
                      <button className="mdl-mega-footer--social-btn"></button>
                      &nbsp;
                      <button className="mdl-mega-footer--social-btn"></button>
                      &nbsp;
                      <button className="mdl-mega-footer--social-btn"></button>
                    </div>
                    <div className="mdl-mega-footer--right-section">
                      <a className="mdl-typography--font-light" href="#top">
                        Back to Top
                        <i className="material-icons">expand_less</i>
                      </a>
                    </div>
                  </div>

                  <div className="mdl-mega-footer--middle-section">
                    <p className="mdl-typography--font-light">Satellite imagery: © 2014 Astrium, DigitalGlobe</p>
                    <p className="mdl-typography--font-light">Some features and devices may not be available in all areas</p>
                  </div>

                  <div className="mdl-mega-footer--bottom-section">
                    <a className="android-link android-link-menu mdl-typography--font-light" id="version-dropdown">
                      Versions
                      <i className="material-icons">arrow_drop_up</i>
                    </a>
                    <ul className="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect" for="version-dropdown">
                      <li className="mdl-menu__item">5.0 Lollipop</li>
                      <li className="mdl-menu__item">4.4 KitKat</li>
                      <li className="mdl-menu__item">4.3 Jelly Bean</li>
                      <li className="mdl-menu__item">Android History</li>
                    </ul>
                    <a className="android-link android-link-menu mdl-typography--font-light" id="developers-dropdown">
                      For Developers
                      <i className="material-icons">arrow_drop_up</i>
                    </a>
                    <ul className="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect" for="developers-dropdown">
                      <li className="mdl-menu__item">App developer resources</li>
                      <li className="mdl-menu__item">Android Open Source Project</li>
                      <li className="mdl-menu__item">Android SDK</li>
                      <li className="mdl-menu__item">Android for Work</li>
                    </ul>
                    <a className="android-link mdl-typography--font-light" href="">Blog</a>
                    <a className="android-link mdl-typography--font-light" href="">Privacy Policy</a>
                  </div>

                </footer>
              </div>
            </div>
            <a href="https://github.com/google/material-design-lite/blob/mdl-1.x/templates/android-dot-com/" target="_blank" id="view-source" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--accent mdl-color-text--accent-contrast">View Source</a>
            <script src="$$hosted_libs_prefix$$/$$version$$/material.min.js"></script>

            </div>
        );
    }
}

export default App;
