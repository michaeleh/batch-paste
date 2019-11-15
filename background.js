var batches = [];
var sent = 0;
var element = undefined;
var value = undefined;
function paste(e,tab) {
	for (var batchIndex in batches){               
		chrome.tabs.query({active: true, currentWindow: true},sendMessage )
	}
}
function sendMessage(tabs){
	chrome.tabs.sendMessage(tabs[0].id, {text:batches[sent]});
	sent++;
	if (sent == batches.length){
		sent = 0;
                alert('finished');
	}
}

chrome.contextMenus.create({
 title: "Batch Paste",
 contexts:["editable"],  // ContextType
 onclick: paste // A callback function
}); 



