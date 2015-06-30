(function() {
	"use strict";

	var root = (1, eval)('this');
	var Chart = root.Chart;
	var helpers = Chart.helpers;

	Chart.PolarArea = function(context, config) {
		config.type = 'polarArea';

		return new Chart(context, config);
	}

}).call(this);
