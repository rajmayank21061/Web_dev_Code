//real dom : Its a tree of html elements and root element is Html.
// D -> document/html file
// O -> Object/element of html file
// why we use react instead of js
//Reason is its load full page instead you change only littel bit
//but React only changes what needs to be changed
// and more other featurs.
//by using dom you control/access html file from js.

var h = React.createElement('h1',null,"hello from world");
var parent = document.querySelector(".parent")
var root = ReactDOM.createRoot(parent);
root.render(h);

/*
React is a tool for building UI components.
-> Rect creates a virtual DOM in memory.
-> React only changes what needs to be changed.
*/