export const getDimensions = size => {
    const common = {
      position: 'absolute',
      width: '200px',
      height:'50px',
    };

    switch(size) {
      case "sm":
        return {
          ...common,
          height: '40px',
        }
      case "fullWidth":
        return {
          ...common,
          width: '100%',
        }
      default:
        return common;
    }
}

export const getBoxColor = error => {
  if (error) {
    return {
      border: '1px solid #D32F2F',
      boxSizing: 'border-box',
      borderRadius: '8px',
    }
  }
  return {
    border: '1px solid #828282',
    boxSizing: 'border-box',
    borderRadius: '8px',
  }
}

/** JS event action handlers */
export function mouseOut(event, error) {
  if ((event.target.nodeName === "INPUT" || event.target.nodeName === "TEXTAREA") && document.activeElement !== event.target) {
    if (error) {
      event.target.style.border = '1px solid #D32F2F';
      return '#D32F2F';
    } 
    event.target.style.border = '1px solid #828282';
  }
}

export function mouseOver(event, error) {
  if ((event.target.nodeName === "INPUT" || event.target.nodeName === "TEXTAREA") && document.activeElement !== event.target) {
    event.target.style.border = '1px solid #333333';
    if (error) {
      return '#333333';
    }
  }
}

export function focus(event, error) {
  if (event.target.nodeName === "INPUT" || event.target.nodeName === "TEXTAREA") {
    if (error) {
      event.target.style.border = '1px solid #D32F2F';
      return '#D32F2F';
    }
    event.target.style.border = '1px solid #2962FF';
    return '#2962FF'
  }
}

export function blur(event, error) {
  if (event.target.nodeName === "INPUT" || event.target.nodeName === "TEXTAREA") {
    if (!error) {
      event.target.style.border = '1px solid #828282';
      return '#333333'
    }
  }
}