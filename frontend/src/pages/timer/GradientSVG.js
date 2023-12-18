import React, {Component} from 'react';

// Inspired by the tutorials of Aleks Popovic & Coding With Dawid
class GradientSVG extends Component {
    render() {
      let { startColor, endColor, idCSS, rotation } = this.props;
  
      let gradientTransform = `rotate(${rotation})`;
  
      return (
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id={idCSS} gradientTransform={gradientTransform}>
              <stop offset="0%" stopColor={startColor}  />
              <stop offset="100%" stopColor={endColor} />
            </linearGradient>
          </defs>
        </svg>
      );
    }
  }
  
  export default GradientSVG;