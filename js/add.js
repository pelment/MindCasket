
window.onload = function() {

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var current = tabs[0];
		document.getElementById('doc_link').value = current.url;	
	});
}
