let buttonCreateWindow = document.querySelectorAll("#ButtonCreateWindow");
if (buttonCreateWindow) {
    buttonCreateWindow.onclick = createWindow
}
let zIndex = 1;
/**
* @param {MouseEvent} event
*/
function createWindow (event) {
    let rootWindow = document.createElement("div")
    head = document.createElement("div"),
        body = document.createElement("div"),
        text = document.createElement("div"),
        cluse = document.createElement("div");
    rootWindow.append(head, body);
    head.append(text, cluse);
    head.onmousedown = onmousedown;
    head.onmousemove = onmousemove;
    head.onmouseup = onmouseup;
    text.textContent = "This window";
    rootWindow.className = "Window";
    head.className = "head";
    body.className = "body";
    cluse.className = "cluse";
}
