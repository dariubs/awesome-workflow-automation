

(function(){

	var initUrl = 'http://localhost/rtl/initcontent.md';

	$(document).ready(function(){
		
	   	$.get(initUrl)
			.done(function( data ) {
				$('textarea').val(data);
			});

		$('textarea').autogrow();

	   	var content = $('textarea').val();

	    $('#output').html(marked(content));

		setInterval(function(){
			var content = $('textarea').val();
			
	    	$('#output').html(marked(content));

		}, 2000);
	});

}())