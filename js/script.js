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

// added in the area 
function addedCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById(areaType);

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);

}
// calculate here
// calculate here
// 1111
function calculateTriangleArea() {
  const triangleWidthValue = getInputValue("triangle-width");
  const triangleHeightValue = getInputValue("triangle-height");

  if(isNaN(triangleWidthValue) || isNaN(triangleHeightValue)){
    alert('Please insert a number');
    return;
  }

  const area = 0.5 * triangleWidthValue * triangleHeightValue;

  setElementInnerText("triangle-area", area);

  addedCalculationEntry('calculate-added', area)


}
// 2222
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
// 333
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
// 4444
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
// 5555
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
// 6666
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
