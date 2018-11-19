import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from './presets/spinner.svg'
import './styles.css';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show
    };
    this.close = this.close.bind(this);
  }
  close (e) {
    e.preventDefault();
    this.setState({
      show: false
    });
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      show: nextProps.show
    })
  }
  render () {
    const {fullscreen, width, height, background, color, dismissible, imageUrl, text, animation} = this.props;
    if (!this.state.show) {
      return null
    }
    const svgStyle = {
      width: '50%',
      margin: '0 auto',
      display: 'block'
    }
    return (
      <div
        ref="loader"
        className={"loader " + (fullscreen ? "fullscreen":"")}
        style={{
          backgroundColor: background,
          color: color,
          width: !fullscreen ? width : '100%',
          height: !fullscreen ? height : '100%',
        }}
      >
        { dismissible && <a href="#" className={fullscreen ? "close" : "mini-close"} onClick={this.close}/> }
        <div className="preset">
          { animation ?
            <img src={'./src/presets/'+animation+'.svg'} style={svgStyle}/>
            : <img src={imageUrl || Spinner} style={svgStyle}/>
          }
        </div>
        { text && <h3 className="loader-text">{text}</h3> }
      </div>
    )
  }
}

Loader.propTypes = {
  text: PropTypes.string,
  animation: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fullscreen: PropTypes.bool,
  imageUrl: PropTypes.string,
  dismissible: PropTypes.bool,
  show: PropTypes.bool
};

Loader.defaultProps = {
  text: 'Loading...',
  animation: null,
  color: '#FFFFFF',
  background: `rgba(0, 0, 0, 0.7)`,
  width: '100%',
  height: '100%',
  fullscreen: false,
  imageUrl: null,
  dismissible: false,
  show: true
};

export default Loader;
