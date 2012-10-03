(function() {

	var fileUrl = "http://sparkbox.github.com/Responsive-Retrofitting/" + document.location.hostname + "/css/retrofit.css";
	
	var cssLink = document.createElement('link');
	cssLink.setAttribute('rel', 'stylesheet');
	cssLink.setAttribute('type', 'text/css');	// Changed the type from "text/stylesheet" to "text/css". This makes it work for Firefox.
	cssLink.setAttribute('href', fileUrl);
	
	if (document.createStyleSheet) {
		document.createStyleSheet(fileUrl);	// With IE, you must use createStyleSheet
	} else {
		document.head.appendChild(cssLink);
	}

	// Add meta tag, too!
	var metaCode = document.createElement('meta');
	metaCode.setAttribute('name', 'viewport');
	metaCode.setAttribute('content', 'width=device-width,initial-scale=1.0');
	document.head.appendChild(metaCode);

})();