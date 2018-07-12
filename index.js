//Code your solution here
function getFirstSelector(s) {
  return document.querySelector(s);

}
function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var newNumber = parseInt(document.querySelectorAll('ul.ranked-list')) + n
  return newNumber
}

function deepestChild(){
return document.querySelector('#grand-node div div div div')
}