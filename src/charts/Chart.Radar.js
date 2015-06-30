(function() {
	"use strict";

	var root = (1, eval)('this');
	var Chart = root.Chart;
	var helpers = Chart.helpers;

	Chart.Radar = function(context, config) {
		config.type = 'radar';

		return new Chart(context, config);
	}

}).call(this);
