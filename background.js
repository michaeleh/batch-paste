var batches = [];
var sent = []
var element = undefined;
var value = undefined;
function paste(e,tab) {
	for (var batchIndex in batches){               
		chrome.tabs.query({active: true, currentWindow: true},sendMessage )
	}
}
function sendMessage(tabs){
	chrome.tabs.sendMessage(tabs[0].id, {text:batches[sent.length]});
	sent.push(true);
	if (sent.length == batches.length){
		sent = [];
	}
}

chrome.contextMenus.create({
 title: "Batch Paste",
 contexts:["editable"],  // ContextType
 onclick: paste // A callback function
}); 



