var element = undefined;

window.onclick = e => {
	element = e.target;
}

chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
    
	element.value += message.text;
});
