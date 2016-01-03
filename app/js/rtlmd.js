(function(){

	var initUrl = 'http://dariubs.github.io/rtlmd/initcontent.md';

	$(document).ready(function(){
		if(localStorage!='' && localStorage['content']!=null){
			$('textarea').val(localStorage['content']);
		}else{
			$.get(initUrl)
			.done(function( data ) {
				$('textarea').val(data);
			});
		}


		$('textarea').autogrow();

	   	var content = $('textarea').val();

	    $('#output').html(marked(content));

		setInterval(function(){
			var content = $('textarea').val();
			localStorage['content'] = content;
	    	$('#output').html(marked(content));
		}, 3000);
	});

}());


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-55991804-1', 'auto');
ga('send', 'pageview');
