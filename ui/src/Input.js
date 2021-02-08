import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  mouseOver,
  mouseOut,
  focus,
  blur,
  getDimensions,
  getBoxColor,
  getHelperTextCSS,
} from './cssUtils';
import './Input.css';

const propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  size: PropTypes.string,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.node,
  Icon: PropTypes.oneOf(["start", "end"]),
};

const defaultProps = {
  value: "",
  size: "md",
  rows: 1,
  placeholder: "placeholder",
  helperText: "",
  disabled: false,
  error: false,
  children: null,
  Icon: "start",
};

const Input = ({
  label,
  value,
  size,
  rows,
  placeholder,
  helperText,
  disabled,
  error,
  children,
  Icon,
}) => {

  const getColor = () => {
    if (error) {
      return '#D32F2F';
    }
    return '#333333';
  };

  const [color, setColor] = useState(getColor());
  const [_value, setValue] = useState(value);

  useEffect(() => {
    if (error) {
      setColor('#D32F2F');
    } else if (color !== "#333333") {
      setColor('#333333');
    }
    // eslint-disable-next-line
  }, [error]);

  const aggregatedCSS = { ...getDimensions(size), ...getBoxColor(error) };
  const paddingHelperTextCSS = { ...getHelperTextCSS(size, rows) };

  if (children) {
    if (Icon === "end") {
      aggregatedCSS['padding-right'] = '30px';
    } else {
      aggregatedCSS['padding-left'] = '30px';
    }
  }

  const renderChildren = () => {
    return children && React.cloneElement(children, {style: Icon === "end" ? { right: '5px' } : { left: '5px'} });
  };

  const handleMouseActions = (e, fn) => {
    const color = fn(e, error);
    if (typeof color !== 'undefined') {
      setColor(color);
    }
  };

  console.log(children);
  return (
    <div className="outerDiv" style={{ width: aggregatedCSS.width }}>
      <label className="label" style={{ color }}>{label}</label>
      <div className="innerDiv">
        {renderChildren()}
        {
          size === "multiline" ?
          <textarea
            placeholder={placeholder}
            value={_value}
            name={label}
            disabled={disabled}
            onMouseOver={e => handleMouseActions(e, mouseOver)}
            onMouseOut={e => handleMouseActions(e, mouseOut)}
            onChange={e => setValue(e.target.value)}
            onFocus={e => handleMouseActions(e, focus)}
            onBlur={e => handleMouseActions(e, blur)}
            rows={`${rows}`} 
            style={{ ...getBoxColor(error), width: '200px' }}
          /> :
          <input
            placeholder={placeholder}
            value={_value}
            name={label}
            onMouseOver={e => handleMouseActions(e, mouseOver)}
            onMouseOut={e => handleMouseActions(e, mouseOut)}
            onChange={e => setValue(e.target.value)}
            onFocus={e => handleMouseActions(e, focus)}
            onBlur={e => handleMouseActions(e, blur)}
            style={{ ...aggregatedCSS }}
            disabled={disabled}
          />
        }
      </div>
      { helperText && helperText.length && <p className="helperText" style={{ ...paddingHelperTextCSS, color }}>{helperText}</p> }
    </div>

  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;