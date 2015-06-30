(function() {
	"use strict";

	var root = (1, eval)('this');
	var Chart = root.Chart;
	var helpers = Chart.helpers;

	Chart.Line = function(context, config) {
		config.type = 'line';

		return new Chart(context, config);
	}

}).call(this);
