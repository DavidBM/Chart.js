(function() {
	"use strict";

	var root = (1, eval)('this');
	var Chart = root.Chart;
	var helpers = Chart.helpers;

	Chart.Bar = function(context, config) {
		config.type = 'bar';

		return new Chart(context, config);
	}

}).call(this);
