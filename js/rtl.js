$(document).ready(function(){
    $('textarea').autosize();
   
   	$('body').append('<div id="content"></div>');

	
    $("#box").on('keydown', function() {
    	var content = $('#box').val();
    	$('#content').html(marked(content));
	});


	
	

});

