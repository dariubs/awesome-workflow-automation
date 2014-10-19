

(function(){
	var initUrl = 'http://dariubs.github.io/rtlmd/initcontent.md';
	$(document).ready(function(){


	   	$('body').append('<div id="content"></div>');
	   	$.get( initUrl)
			.done(function( data ) {
				$('#box').val(data);
			});
		var opts = {
		    onInitialize : true
		};


		$('#box').autogrow(opts);

	   	
	   	var content = $('#box').val();
	    $('#content').html(marked(content));

		setInterval(function(){
			var content = $('#box').val();
			hljs.initHighlightingOnLoad();
	    	$('#content').html(marked(content));

		}, 2000);




	});

}())