import React, { Component } from 'react';
import { Grid, GridCell, GridInner } from '../../../node_modules/@rmwc/grid';
import Header from '../../components/Header/Header.jsx';
// import Footer from '../../components/Footer/Footer.jsx';

// Sections
import Intro from './Sections/Intro.jsx';

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
         <Grid>
                <GridCell span = "12">
                 <Header />
                </GridCell>
                <GridCell span = "12">
                 <Intro />
                 </GridCell>
             {/*
                 <What's Involved Section />
                 <Want to practice Section />
                 <Prize Section />
                 <Team Section />
                 <Footer/>
             */}
         </Grid>
      </React.Fragment>
    );
  }
}

export default HomePage;
