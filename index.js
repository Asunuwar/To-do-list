var enterButton = document.getElementById("enter");
//  GO TO HTML DOCUMENT ID AND LOOK FOR "ENTER".
var input = document.getElementById("userInput");
//  GO TO HTML DOCUMENT ID AND LOOK FOR "USERINOUT".
var ul = document.querySelector("ul");
//  GO TO HTML DOCUMENT ID AND LOOK FOR "UL".
var item = document.getElementsByTagName("li");
//  GO TO HTML FOLDER ID AND LOOK FOR "LI".
// tag

function inputLength(){
	return input.value.length;
}
// blue are all javacript
function listLength(){
	return item.length;
}

function createListElement() {
           //function name,
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field

	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	}
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
