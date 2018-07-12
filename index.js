//Code your solution here
function getFirstSelector(s) {
  return document.querySelector(s);

}
function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var newNumber = parseInt(document.querySelector('ul.ranked-
  list')) + n; 
  return newNumber
}