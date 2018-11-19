import React, {Component} from 'react';
import './styles.css';
import { render } from 'react-dom';
import Loader from '../../src';
import SVG from '../../src/presets/circle.svg';
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      example1: {
        _html: `
  <Loader
    text="Example One"
    width="250px"
    height="250px"
    color="#FFF"
    background="rgba(234, 12, 35, 0.7)"
  />
        `
      },
      example2: {
        _html: `
  <Loader
    text="Example Two"
    animation="clock"
    width="250px"
    height="250px"
    color="#FFF"
    background="rgba(234, 12, 35, 0.7)"
  />
        `
      },
      example3: {
        _html: `
  <Loader
    text="Example Three"
    dismissible={true}
    width="250px"
    height="250px"
    color="#FFF"
    background="rgba(234, 12, 35, 0.7)"
  />
        `
      },
      example4: {
        _html: `
  <Loader
    text="Example Four"
    imageUrl="https://mbtskoudsalg.com/images/loading-gif-png-5.gif"
    width="250px"
    height="250px"
    color="#FFF"
    background="rgba(234, 12, 35)"
  />
        `
      },
      example5: {
        show: false,
        _html: `
  <Loader
    animation = "double-circle"
    text = "Example five"
    color = "#FFF"
    background = "rgba(63, 81, 181, 0.7)"
    fullscreen = {true}
    dismissible = {true}
    show = {true}
  />
        `
      },
    }
  }
  render (){
    return (
      <div>
        <div className="example">
          <p className="example-title">Specific Height x Width:</p>
          <pre>
            <code>{this.state.example1._html}</code>
          </pre>
           <Loader text="Example One" width="250px" height="250px" color="#FFF" background="rgba(63, 81, 181, 0.7)" />
        </div>
        <div className="example">
          <p className="example-title">Using animation presets<br/>[bar, circle, clock, dots, double-circle, drop, spinner]</p>
          <pre>
            <code>{this.state.example2._html}</code>
          </pre>
           <Loader text="Example two" animation="clock" width="250px" height="250px" color="#FFF" background="rgba(63, 81, 181, 0.7)" />
        </div>
        <div className="example">
          <p className="example-title">dismissible Loader:</p>
          <pre>
            <code>{this.state.example3._html}</code>
          </pre>
           <Loader text="Example three" width="250px" height="250px" color="#FFF" background="rgba(63, 81, 181, 0.7)" dismissible={true}/>
        </div>
        <div className="example">
          <p className="example-title">Using Existing animation:</p>
          <pre>
            <code>{this.state.example4._html}</code>
          </pre>
           <Loader text="Example four" width="250px" height="250px" color="#FFF" background="rgba(63, 81, 181)" imageUrl="https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif"/>
        </div>
        <div className="example">
          <p className="example-title">Dissmisible + Full Screen Loader:</p>
          <pre>
            <code>{this.state.example4._html}</code>
          </pre>
          <button onClick={() => this.setState(state => (state.example5.show = true))}>Show</button>
          <Loader animation="double-circle" text="Example five" color="#FFF" background="rgba(63, 81, 181, 0.7)" fullscreen={true} dismissible={true} show={this.state.example5.show}/>
        </div>
      </div>
    )
  }
}
render(<App />, document.getElementById("root"));
