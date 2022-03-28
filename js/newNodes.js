let btn = document.querySelector("#nodes");
btn.addEventListener("click", addNodes);

function addNodes() {
    //create a new node li
    var node = document.createElement("li");

    // create a text node "water" to place inside the new element
    var textnode = document.createTextNode("Products");

    // add the text node to the new element
    node.appendChild(textnode);

    // add the new node to the child of element with id = mylist
    document.querySelector("#topnav").appendChild(node);

    // create a 2nd new element (li)
    let node2 = document.createElement("li");

    // create a new text node for this element
	let textnode2 = document.createTextNode("Nodes ");

    // attach the new node to the new element
	 node2.appendChild(textnode2);

   // add this node to the child of element with id = mylist
   document.querySelector("#topnav").appendChild(node2);

   //changing class name to cool
   let listItems = document.querySelectorAll('li');                   

  // ADD A CLASS OF COOL TO ALL LIST ITEMS
  let i;                                                            
  
  // Loop through collection elements 
  for (i = 0; i < listItems.length; i++) {                           
    // Change class to cool
    listItems[i].className = 'cool';                                 
  } 

   
}

