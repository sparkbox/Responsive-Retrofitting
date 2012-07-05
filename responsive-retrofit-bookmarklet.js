javascript: (function () {  
  var jsCode = document.createElement('script');
  jsCode.setAttribute('src', 'http://sparkbox.github.com/Responsive-Retrofitting/responsive-retrofit.js');
  document.body.appendChild(jsCode);
  
  // Add meta tag, too!
  var metaCode = document.createElement('meta');
  metaCode.setAttribute('name', 'viewport');
  metaCode.setAttribute('content', 'width=device-width,initial-scale=1.0');
  document.head.appendChild(metaCode);
  
}());