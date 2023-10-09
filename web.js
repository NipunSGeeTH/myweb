











var link = document.createElement('link');
link.setAttribute('href','myweb.css');
link.setAttribute('rel','stylesheet');
document.head.appendChild(link);



// Check if a footer section exists
var footer = document.querySelector("footer");

// Create a new footer if it doesn't exist
if (!footer) {
  footer = document.createElement("footer");
  document.body.appendChild(footer);
}

// Create the <div> element
var divElement = document.createElement("div");
divElement.setAttribute("class","");
divElement.setAttribute("style", "background-color: rgba(0, 0, 0, 0); padding: 1px; text-align: center; width: 100vw; margin: 0;");

var pElement = document.createElement("span");
pElement.setAttribute("class", "blinking");

var spanElement1 = document.createElement("span");
spanElement1.setAttribute("class", "blin1");
spanElement1.textContent = "Design & Develop By";

var aElement = document.createElement("a");
aElement.setAttribute("href", "https://www.linkedin.com/nipunsgeeth");
aElement.setAttribute("target", "_blank");
aElement.setAttribute("id", "blin2");

var spanElement2 = document.createElement("span");
spanElement2.textContent = "SanGeeTH";

// Construct the DOM structure
aElement.appendChild(spanElement2);
pElement.appendChild(spanElement1);
pElement.appendChild(aElement);
divElement.appendChild(pElement);

// Append the <div> element to the footer
footer.appendChild(divElement);