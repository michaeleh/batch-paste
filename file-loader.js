var batches = []
document.getElementById('upload').onchange = e => { 
   // getting a hold of the file reference
   var file = e.target.files[0]; 

   // setting up the reader
   var reader = new FileReader();
   reader.readAsText(file,'UTF-8');
   // here we tell the reader what to do when it's done reading...
   reader.onload = readerEvent => {
	  var content = readerEvent.target.result; // this is the content!
	  batches = content.split('\n'); // line by line 
	  chrome.runtime.getBackgroundPage(sendMessage)
   }  
}

function sendMessage(tabs){
	tabs.batches = batches;
}

