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