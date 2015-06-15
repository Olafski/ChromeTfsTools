function hideCompleted() {
	$('.taskboard-row')
	    .not('.taskboard-row-summary')
		.each(function(index,element) {
			if ($('[axis=taskboard-table_s0]', element).children().length == 0 
	         && $('[axis=taskboard-table_s1]', element).children().length == 0) {
				 $('.taskboard-expander > div.minimize:visible', element).click();
			}
		});
}

$(function() {
	var isCorrectPage = $('.selected[title=Board]').length !== 0 && $('.sprint-date').length !== 0;
	
	if (isCorrectPage) {
		$('.views > ul').append('<li><button  id="collapseCompletedButton">Collapse completed</button></li>');
		$('#collapseCompletedButton').click(hideCompleted);
	}
});