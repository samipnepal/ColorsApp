import React, {Component} from 'react';
import './ColorsApp.css';

/*
  App to generate different unique colors within a given range/step
  Author: Yadab Nepal
*/
class ColorsApp extends Component {

  colorsCount = 256 * 128;
  horizontalCord = new Array(256).fill().map((a, i) => a = i).sort(() => Math.random() - 0.5);
  verticleCord = new Array(128).fill().map((a, i) => a = i).sort(() => Math.random() - 0.5);
  redColors = new Array(32).fill().map((a, i) => a = i).sort(() => Math.random() - 0.5);
  blueColors = new Array(32).fill().map((a, i) => a = i).sort(() => Math.random() - 0.5);
  greenColors = new Array(32).fill().map((a, i) => a = i).sort(() => Math.random() - 0.5);
  sequentialGrid = [];
  randomGrid=[];

  //Runs once the render function mount the template in the dom.
  componentDidMount() {
    this.fillCooardinates();
    this.fillCanvas(this.refs.canvas1.getContext('2d'), this.sequentialGrid);
    this.fillCanvas(this.refs.canvas2.getContext('2d'), this.randomGrid);
  }

  //creates an array of random co-ordinates of the canvas to make the canvas look good
  fillCooardinates() {
    for(let i=0;i<256;i++) {
      for (let j=0;j<128;j++) {
        this.sequentialGrid.push([i, j]);
      }
    }
    this.horizontalCord.forEach(xCord=> {
      this.verticleCord.forEach(yCord => {
        this.randomGrid.push([xCord, yCord]);
      })
    })
  }

  //fills different colors in the canvas according to the grid
  fillCanvas(context, grid) {
    let gridCount = 0;
    this.redColors.forEach(redColor=> {
      this.greenColors.forEach(greenColor=> {
        this.blueColors.forEach(blueColor => {
          context.fillStyle = "rgb("+ this.getRedColor(redColor) +","+this.getGreenColor(greenColor)+","+this.getBlueColor(blueColor)+")";
          context.fillRect(grid[gridCount][0], grid[gridCount][1], 1, 1);
          gridCount++;
        })
      })
    })
  }

  getRedColor(color) {
    return this.redColors[color +1 ] * 8;
  }

  getGreenColor(color) {
    return this.greenColors[color+1] * 8;
  }

  getBlueColor(color) {
    return this.blueColors[color+1] * 8;
  }

  render() {
    return (
      <div className="colorsApp">
        <div className="header">
          <div id="canvas1">
            <span>Approach 1</span><br/>
            <canvas ref="canvas1" width={256} height={128}  />
          </div>
          <div id="canvas2">
            <span>Approach 2</span><br/>
            <canvas ref="canvas2" width={256} height={128} id="canvas2"/>
          </div>
          <div className="clear"></div>
          <span>To save the image as png, right click on the image and click on "Save Image As"</span>
        </div>
      </div>
    );
  }
}

export default ColorsApp;
