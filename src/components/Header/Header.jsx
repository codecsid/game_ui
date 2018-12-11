import React, { Component } from 'react';
import { GridCell } from '../../../node_modules/@rmwc/grid';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarActionItem,
  TopAppBarTitle
} from '../../../node_modules/@rmwc/top-app-bar';
import {
    TabBar,
    Tab
} from '../../../node_modules/@rmwc/tabs';

class Header extends Component {
  render() {
    const tabStyle = {
        height: "100%",
        minWidth: "48px",
        maxWidth: "80px",
        fontWeight: "400",
        textTransform: "none",
        padding: "1rem"
    };
    return (
      <React.Fragment>
          <TopAppBar fixed style={{backgroundColor: "#fff", boxShadow: "0 2px 6px 0 rgba(0,0,0,.12)",
            color: "rgba(0,0,0,.87)"}}>
            <TopAppBarRow>
              <TopAppBarSection alignStart>
                <TopAppBarTitle style={{overflow: "visible"}}>CodeComp</TopAppBarTitle>
                    <TabBar style={{marginLeft: "40px"}}>
                      <Tab style={tabStyle}>Schedule</Tab>
                      <Tab style={tabStyle}>Rules</Tab>
                      <Tab style={tabStyle}>Register</Tab>
                    </TabBar>
              </TopAppBarSection>
              <TopAppBarSection alignEnd>
                <TopAppBarActionItem aria-label="Download" alt="Download">
                  file_download
                </TopAppBarActionItem>
                <TopAppBarActionItem
                  aria-label="Print this page"
                  alt="Print this page"
                >
                  print
                </TopAppBarActionItem>
                <TopAppBarActionItem
                  aria-label="Bookmark this page"
                  alt="Bookmark this page"
                >
                  bookmark
                </TopAppBarActionItem>
              </TopAppBarSection>
            </TopAppBarRow>
            </TopAppBar>
      </React.Fragment>
    );
  }
}

export default Header;
