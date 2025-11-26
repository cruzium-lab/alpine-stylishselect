/**
 * Alpine wrapper for Stylish Select
 * @version 1.0.5.2
 * @author Tony Leung <tony.leung@cruzium.com>
 * @copyright Copyright (c) 2025 Cruzium Digital
 * @license https://opensource.org/license/gpl-3-0/ GPL-3.0-only
 */

'use strict';
window.Alpine_stylishSelect = function(options) {
	var handler = function(el, directive, utils) {
		if (el.tagName.toLowerCase() != 'select' || el.hasAttribute('multiple')) {
			return;
		}
		var instance = new StylishSelect(el, options);
		if (el.hasAttribute('x-model')) {
			var bound = utils.evaluateLater(el.getAttribute('x-model'));
			utils.effect(function() {
				bound(function() {
					utils.Alpine.nextTick(function() {
						instance.refresh();
					});
				});
			});
			if (window.MutationObserver) {
				new MutationObserver(function(mutations, observer) {
					var value = utils.evaluate(el.getAttribute('x-model')) || el.value;
					utils.evaluate(el.getAttribute('x-model') + ' = ""');
					utils.evaluate(el.getAttribute('x-model') + ' = "' + value + '"');
					instance.refresh();
				}).observe(el, {
					childList: true
				});
			}
		}
	};
	return(function(Alpine) {
		Alpine.directive('stylishselect', handler);
	});
};
