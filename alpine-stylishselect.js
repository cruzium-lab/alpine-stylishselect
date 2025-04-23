/**
 * Alpine-Stylish Select - Alpine wrapper for jQuery Stylish Select.
 * @version 1.0.0
 * @author Tony Leung <tony.leung@cruzium.com>
 * @copyright Copyright (c) 2025 Cruzium Digital
 * @license https://opensource.org/license/gpl-3-0/ GPL-3.0-only
 */

'use strict';
(function($) {
	window.Alpine_stylishSelect = function(options) {
		var handler = function(el, directive, utils) {
			if (el.tagName.toLowerCase() != 'select' || el.hasAttribute('multiple') || !el.hasAttribute('x-model')) {
				return;
			}
			$(el).stylishSelect(options);
			var bound = utils.evaluateLater(el.getAttribute('x-model'));
			utils.effect(function() {
				bound(function() {
					utils.Alpine.nextTick(function() {
						$(el).stylishSelect('refresh');
					});
				});
			});
		};
		return(function(Alpine) {
			Alpine.directive('stylishselect', handler);
		});
	};
})(jQuery);
