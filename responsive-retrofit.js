(function() {

	var cssLink = document.createElement('link');
	cssLink.setAttribute('rel', 'stylesheet');
	cssLink.setAttribute('type', 'text/stylesheet');
	cssLink.setAttribute('href', "http://weisjohn.github.com/Responsive-Retrofitting/" + document.location.hostname + "/css/retrofit.css");
	document.head.appendChild(cssLink);

	// Add meta tag, too!
	var metaCode = document.createElement('meta');
	metaCode.setAttribute('name', 'viewport');
	metaCode.setAttribute('content', 'width=device-width,initial-scale=1.0');
	document.head.appendChild(metaCode);

})();