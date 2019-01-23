let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"]
// MAP
// urls: Imperative version
function imperativeUrls(elements) {
  let urls = []
  elements.forEach(function(element) {
    urls.push(urlify(element))
  });
  return urls
}
console.log('imperativeUrls(states)', imperativeUrls(states))

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element))
}
console.log('functionalUrls(states)', functionalUrls(states))

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string){
  return string.toLowerCase().split(/\s+/).join('-')
}

function stateUrls(array){
  return states.map(state => `http://www.example.com/${urlify(state)}`)
}
console.log('excercise', stateUrls(states))

// FILTER
// singles: Imperitive version
function imperitiveSingles(elements){
  let singles = []
  elements.forEach(function(element){
    if (element.split(/\s+/).length === 1){
      singles.push(element)
    }
  })
  return singles
}
console.log('imperitiveSingles(states)', imperitiveSingles(states))

function functionalSingles(elements){
  return elements.filter(element => element.split(/\s+/).length === 1)
}
console.log('functionalSingles(states)', functionalSingles(states))

function filterIncludes(elements){
  return elements.filter(element => element.toLowerCase().includes('dakota'))
}
console.log('filterIncludes', filterIncludes(states))

function filterRegex(elements){
  return elements.filter(element => /2/.exec(element.split(/\s+/).length))
}
console.log('filterRegex', filterRegex(states))

// REDUCE
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {lengths[element] = element.length;return lengths;}, {});
}
console.log('functionalLengths', functionalLengths(states));

function total(elements){
  return elements.reduce((total, element) => {return total *= element})
}
console.log('reduce product', total(numbers))