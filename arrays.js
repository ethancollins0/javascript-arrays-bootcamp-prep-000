var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray() {
  return ["Hersheys", ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray() {
  return chocolateBars.unshift("Hersheys")
}

function addElementToEndOfArray() {
  return [...chocolateBars, "Hersheys"]
}

function destructivelyAddElementToEndOfArray() {
  return chocolateBars.push("Hersheys")
}
