import React, { Component } from 'react';
import { Grid, GridCell, GridInner } from '../../../../node_modules/@rmwc/grid';

class Intro extends Component {
  render() {
    return (
      <React.Fragment>
          <Grid>
          <GridCell span="12">a</GridCell>
          <GridCell span="12">b</GridCell>
          <GridCell span="12">c</GridCell>
          </Grid>
      </React.Fragment>
    );
  }
}

export default Intro;
// 
// <GridInner>
//     <GridCell span="12">1</GridCell>
//         <GridCell span="12">2</GridCell>
//         <GridCell span="12">
//             <GridInner>
//               <GridCell span="12">a</GridCell>
//               <GridCell span="12">b</GridCell>
//               <GridCell span="12">c</GridCell>
//             </GridInner>
//         </GridCell>
// </GridInner>
