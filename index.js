function getFirstSelector(selector) {
  var firstElement = document.querySelector(selector);
  //querySelector returns the first element of the provided selector
  return firstElement;
}

function nestedTarget () {
  //var elementId = document.getElementById('nested');

  //var nestedElement = document.querySelectorAll(elementId.target);
  //return nestedElement;
  var nestedElement = document.querySelectorAll('#nested .target');
  var nestedElementValue = nestedElement[Object.keys(nestedElement)[0]];
  return nestedElementValue
  /*# identifies nested as an id, and . identifies target as a class.
  a space is used between them to idenfity the class target as a descendant of the id nested.*/
}

function increaseRankBy (n) {
  var list = document.getElementById(`app`).querySelectorAll('ul.ranked-list li')
  //variable list contains the unordered list items under the id `app`
  for (let i = 0; i < list.length; i++) {
  //this loop goes through the list and adds 'n' to the list item's number
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
    //without adding .innerHTML, this is not a permanent change to the item list[i]
  }
}

function deepestChild () {
  var deepChild = document.querySelectorAll(`#grand-node div div div div`);
  var deepChildValue = deepChild[Object.keys(deepChild)[0]];
  return deepChildValue
}
