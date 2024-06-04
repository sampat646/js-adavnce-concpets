//Here creates a new div using createElement.
    const div = document.createElement('div');
    console.log(div);//output <div></div>

    //adding class name for the div
    div.className ="myclass";
    console.log(div);//output <div class="myclass"></div>

    // we can define the attributes 

    // div.setAttribute("class", "myclas");

    //adding id for the div
    div.id = "myid";
    console.log(div);//output <div id="myid" class="myclass"></div>

    // div.innerHTML="chai aur code";
// ------------------------or------------------------
    const addtext = document.createTextNode("chai aur code");
    div.appendChild(addtext);


    document.body.appendChild(div);//displays in the document page
