;(function($) {
	$.fn.zerovalidate = function(validateFunctions, options) {
		options = $.extend({
			errorClass: 'zero-validate-error',
			inputPassed: function($input) { $input.removeClass(options.errorClass); },
			inputFailed: function(errorString, $input) {
					$input  // validation failed
						.popover({
							content: errorString,
							placement: $input.data('placement') // it's ok if this is undefined, it defaults to right (so far)
						})
						.popover('show')
						.one('click', function() {
							$input.popover('destroy');
						})
						.addClass(options.errorClass);
				},
			formPassed: $.noop,
			formFailed: function(e) { e.preventDefault(); }
		}, options);

		return this.each(function() {
			var $form = $(this),
				validSoFar,
				runThroughInputs = function($formInputs, goodFn, badFn) {
					$formInputs.each(function() {
						var
							$input = $(this),
							validateFn = validateFunctions[$input.data('validate')] || $.noop,							
							result = validateFn.call($input[0], ['checkbox', 'radio'].indexOf($input[0].type.toLowerCase()) > -1 ? $input[0].checked : $input.val(), $input, $form);

						if (typeof result === 'string') {
							badFn.call($input[0], result, $input, $form);
							validSoFar = false;
						} else {
							goodFn.call($input[0], $input, $form);
						}
					});
				};

			$form.submit(function(e) {
				validSoFar = true;
				runThroughInputs($form.find(':input'), options.inputPassed, options.inputFailed);
				if (!validSoFar) {
					options.formFailed.call($form[0], e, $form);
				} else {
					options.formPassed.call($form[0], e, $form);
				}
			});

			$form.on('input', ':input:not(:radio,:checkbox)', function() {
				runThroughInputs($form.find('.' + options.errorClass), options.inputPassed, $.noop);
			});
			$form.on('click', ':radio,:checkbox', function() {
				runThroughInputs($form.find('.' + options.errorClass), options.inputPassed, $.noop);
			});
		});
	};
})(jQuery);

