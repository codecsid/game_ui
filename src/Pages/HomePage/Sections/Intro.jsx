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
//
// <div>
//     <Grid style={{padding: 0, display: "flex", flexDirection: "column"}}>
//     <GridInner style={{display: "flex", flexDirection: "column"}}>
//         {/*<GridCell style={{background: "aqua", textAlign: "center"}} span="12"><h1>A</h1></GridCell>*/}
//         <GridCell>
//         <TopAppBar>
//           <TopAppBarRow>
//             <TopAppBarSection>
//               <TopAppBarNavigationIcon icon="menu" />
//             </TopAppBarSection>
//           </TopAppBarRow>
//         </TopAppBar>
//         </GridCell>
//     </GridInner>
//     </Grid>
//     <Grid style={{padding: 0}}>
//     <GridInner style={{display: "flex", flexDirection: "column"}}>
//     <GridCell style={{background: "blue", textAlign: "center"}} span="12"><h1>B</h1></GridCell>
//     <GridCell style={{background: "beige", textAlign: "center"}} span="12"><h1>C</h1></GridCell>
//     <GridCell style={{background: "brown", textAlign: "center"}} span="12"><h1>D</h1></GridCell>
//     <GridCell style={{background: "magenta", textAlign: "center"}} span="12"><h1>E</h1></GridCell>
//     <GridCell style={{background: "green", textAlign: "center"}} span="12"><h1>F</h1></GridCell>
//     </GridInner>
//     </Grid>
//     </div>
