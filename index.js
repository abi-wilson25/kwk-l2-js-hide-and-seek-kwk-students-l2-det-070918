//Code your solution here
function getFirstSelector(s) {
  return document.querySelector(s);

}
function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  
  return parseInt(document.querySelectorAll('ul.ranked-list')) + n
}

function deepestChild(){
return document.querySelector('#grand-node div div div div')
}