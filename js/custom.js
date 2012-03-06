jQuery(document).ready(function() {
	
	$('#gf').text('6 GitHub Followers');
    $('#gfr').text('5 GitHub Repos');		
	
	jQuery.getJSON("https://api.github.com/users/erjjones&callback=?", function(data) {
		$('#gf').text(data.followers + ' Followers');
        $('#gfr').text(data.public_repos + ' Repos');	
	});
	
	/*$.get('https://api.github.com/users/erjjones', function(res) { 			
		var obj = jQuery.parseJSON(res);	
		if(typeof obj.followers != 'undefined')		
		{	
			$('#gf').text(obj.followers + ' GitHub Followers');
			$('#gfr').text(obj.public_repos + ' GitHub Repos');		
		}
		else		
		{
			$('#gf').text('6 GitHub Followers');
			$('#gfr').text('5 GitHub Repos');		
		}
    });*/
	
	$('#ghw').githubWidget({
			'username': 'Erjjones',
			'displayActions': false,
			'firstCount': 10,
			'displayHeader': false,
			'displayLastCommit': false,
			'displayAccountInformations': false,
			'displayLanguage': false
		});
});