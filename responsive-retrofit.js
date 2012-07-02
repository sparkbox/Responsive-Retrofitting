var cssLink = document.createElement('link');
cssLink.setAttribute('rel', 'stylesheet');
cssLink.setAttribute('type', 'text/stylesheet');
cssLink.setAttribute('href', "https://raw.github.com/sparkbox/Responsive-Retrofitting/master/" + document.location.hostname + ".css");
document.head.appendChild(cssLink);