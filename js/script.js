function getInputValue(fieldId) {
  const inputId = document.getElementById(fieldId);
  const inputValue = parseFloat(inputId.value);
  return inputValue;
}

function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
function setEllipseElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area.toFixed(2);
}


// calculate here
// calculate here

function calculateTriangleArea() {
  const triangleWidthValue = getInputValue("triangle-width");
  const triangleHeightValue = getInputValue("triangle-height");

  if(isNaN(triangleWidthValue) || isNaN(triangleHeightValue)){
    alert('Please insert a number');
    return;
  }

  const area = 0.5 * triangleWidthValue * triangleHeightValue;

  setElementInnerText("triangle-area", area);
}

function calculateRectangleArea() {
  const rectangleWidthValue = getInputValue("rectangle-width");
  const rectangleLengthValue = getInputValue("rectangle-length");

  if(isNaN(rectangleWidthValue) || isNaN(rectangleLengthValue)){
    alert('Please insert a number');
    return;
  }

  const area = rectangleWidthValue * rectangleLengthValue;

  setElementInnerText("rectangle-area", area);
}
function calculateParallelogramArea() {
  const parallelogramWidthValue = getInputValue("parallelogram-width");
  const parallelogramLengthValue = getInputValue("parallelogram-length");

  if(isNaN(parallelogramWidthValue) || isNaN(parallelogramLengthValue)){
    alert('Please insert a number');
    return;
  }

  const area = parallelogramWidthValue * parallelogramLengthValue;

  setElementInnerText("parallelogram-area", area);
}

function calculateRhombusArea() {
  const rhombusWidthValue = getInputValue("rhombus-width");
  const rhombusLengthValue = getInputValue("rhombus-length");

  if(isNaN(rhombusWidthValue) || isNaN(rhombusLengthValue)){
    alert('Please insert a number');
    return;
  }

  const area = 0.5 * rhombusWidthValue * rhombusLengthValue;

  setElementInnerText("rhombus-area", area);
}

function calculatePentagonArea() {
  const pentagonWidthValue = getInputValue("pentagon-width");
  const pentagonLengthValue = getInputValue("pentagon-length");

  if(isNaN(pentagonWidthValue) || isNaN(pentagonLengthValue)){
    alert('Please insert a number');
    return;
  }

  const area = 0.5 * pentagonWidthValue * pentagonLengthValue;

  setElementInnerText("pentagon-area", area);
}

function calculateEllipseArea() {
  const ellipseWidthValue = getInputValue("ellipse-width");
  const ellipseLengthValue = getInputValue("ellipse-length");

  if(isNaN(ellipseWidthValue) || isNaN(ellipseLengthValue)){
    alert('Please insert a number');
    return;
  }

  const area = 3.14 * ellipseWidthValue * ellipseLengthValue.toFixed(2);

  setEllipseElementInnerText("ellipse-area", area);
}
