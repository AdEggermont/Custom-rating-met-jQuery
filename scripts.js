/* 
	Custom rating demo
	Ad Eggermont
	http://adeggermont.be 
*/

jQuery(function() {
	
	// Variabelen
	var $score = $('#score'),
		$scoreA = $('li a', $score),
		$reviewScore = $('#review_score');
	
	// Dropdownlist verbergen en custom rating tonen
	$score.show();
	$reviewScore.hide();
	
	// Rating geven
	$scoreA.hover(function() {
		$(this).parent().prevAll().andSelf().addClass('hover');
	}, function() {
		$(this).parent().prevAll().andSelf().removeClass('hover');
	}).focus(function() {
		$(this).parent().prevAll().andSelf().addClass('hover');
	}).blur(function() {
		$(this).parent().prevAll().andSelf().removeClass('hover');
	}).click(function(e) {
		var $this = $(this).parent();
		$scoreA.parent().removeClass('selected');
		$this.prevAll().andSelf().addClass('selected');
		$reviewScore.val($this.index() + 1);
		e.preventDefault();
	});
});