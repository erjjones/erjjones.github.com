jQuery(document).ready(function() {
	
	$('#gf').text('6 GitHub Followers');
    $('#gfr').text('5 GitHub Repos');		
	
	JSONP( 'https://api.github.com/users/erjjones?callback=?', function( response ) {
		console.log(response);
	});
	
	function JSONP( url, callback ) {
		var id = ( 'jsonp' + Math.random() * new Date() ).replace('.', '');
		var script = document.createElement('script');
		script.src = url.replace( 'callback=?', 'callback=' + id );
		document.body.appendChild( script );
		window[ id ] = function( data ) {
			if (callback) {
				callback( data );
			}
		};
	}
	
	/*jQuery.getJSON("https://api.github.com/users/erjjones&callback=?", function(data) {
		$('#gf').text(data.followers + ' Followers');
        $('#gfr').text(data.public_repos + ' Repos');	
	});*/
	
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