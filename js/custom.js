jQuery(document).ready(function() {
	/*$.ajax({
			 type: "GET",
			 url: "https://api.github.com/users/erjjones",
			 async: true,
		 dataType: "json",
		 success: function(data){							
			$('#gf').text(data.followers + ' GitHub Followers');
			$('#gfr').text(data.public_repos + ' GitHub Repos');
		 }
		});
		*/
	$.get('https://api.github.com/users/erjjones', function(res) { 		
		console.log(res);
		var obj = jQuery.parseJSON(res);	
		if(typeof obj.followers != 'undefined')		
		{
			console.log('logging obj');
			console.log(obj);
			$('#gf').text(obj.followers + ' GitHub Followers');
			$('#gfr').text(obj.public_repos + ' GitHub Repos');		
		}
		else
		{
			console.log('not logging obj');
			console.log(obj);
			$('#gf').text('10 GitHub Followers');
		    $('#gfr').text('5 GitHub Repos');		
		}		
    });
	
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