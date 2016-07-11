(function() {

	this.DisplayChart = function(element) {

    this.transitionEnd = transitionSelect();
    this.Element = element;

    var defaults = {
      autoOpen: true,
      className: 'bar',
      maxWidth: 600,
      minWidth: 300
    }

    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }
    if(this.options.autoOpen === true) this.display();
 	}

 	DisplayChart.prototype.display = function() {
    	var bars = document.getElementById(this.Element.chartId).getElementsByClassName(this.options.className);

    	for (var i=0;i<bars.length;i++) {
    			if (bars[i].hasAttribute("data-value")) {
        			var percentage = bars[i].getAttribute("data-value");
        			var backgroundcolor = bars[i].getAttribute("data-color");
        			bars[i].style.height = percentage+"%";
        			bars[i].style.backgroundColor = backgroundcolor;
    			}	
    	}
  	}

  	function extendDefaults(source, properties) {
    	var property;
    	for (property in properties) {
      	if (properties.hasOwnProperty(property)) {
        	source[property] = properties[property];
      	}
    	}
    	return source;
  	}

 	  function transitionSelect() {
    	var el = document.createElement("div");
    	if (el.style.WebkitTransition) return "webkitTransitionEnd";
    	if (el.style.OTransition) return "oTransitionEnd";
    	return 'transitionend';
  	}
}());

var mainId = 'bars';
var myPlugin = new DisplayChart({
  chartId: mainId
});