---
layout: post
title: Sample Coding Post
category: Coding
---

<div class="row">
	<div class="span3 columns">
	  <h3>About this topic</h3>
	  <p>A sample set of the code used in this post has been created for you to download.</p>	  
	  <p><a href="https://github.com/erjjones/erjjones.github.com/zipball/master" target="_blank" class="btn btn-info">Download source</a></p>
	  <br/>
	  <h3>Topic buzz</h3>
	  <p>What others are thinking. Add to the conversation and generate some chatter.</p>
	  <p><a href="https://twitter.com/share" class="twitter-share-button" data-via="erjjones">Tweet</a></p>
	  <p><g:plusone size="medium"></g:plusone></p>	  
	  <p><script type="text/javascript" src="http://www.reddit.com/buttonlite.js?i=2&styled=off&url={{ page.url }}&newwindow=1"></script></p> 	  
	  <br/>
	  <h3>Read later</h3>
	  <p><a href="http://www.instapaper.com/hello2?url={{ page.url }}&title={{ page.title }}" title="Save {{ page.title }} to Instapaper" target="_blank">Save this blog post</a> for a later read or point of reference.</p>
	</div>
	<div class="span9 columns">
	  <h2>Section Title</h2>
	  <p>Like you, we love building awesome products on the web. We love it so much, we decided to help people just like us do it easier, better, and faster. Bootstrap is built for you.</p>  
	  <hr>
	  <h2>Another Section Title</h2>
	  <p>Like you, we love building awesome products on the web. We love it so much, we decided to help people just like us do it easier, better, and faster. Bootstrap is built for you.</p>
	  <h2><small>Code Sample<small></h2>
	  <script src="https://gist.github.com/1679055.js?file=NodeJsProxy"></script>	  
	  <hr>
	</div>
</div> 

<div class="row">
	<div class="span3 columns">&nbsp;</div>
	<div class="span9 column">
			<p class="pull-right">{% if page.previous.url %} <a href="{{page.previous.url}}" title="Previous Post: {{page.previous.title}}"><i class="icon-chevron-left"></i></a> 	{% endif %}   {% if page.next.url %} 	<a href="{{page.next.url}}" title="Next Post: {{page.next.title}}"><i class="icon-chevron-right"></i></a> 	{% endif %} </p>  
	</div>
</div>

<div class="row">
	<div class="span3 columns">&nbsp;</div>
    <div class="span9 columns">    
		<h2>Comments Section</h2>
	    <p>Feel free to comment on the post but keep it clean and on topic.</p>	
		<div id="disqus_thread"></div>
		<script type="text/javascript">
			/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
			var disqus_shortname = 'ericjones'; // required: replace example with your forum shortname

			/* * * DON'T EDIT BELOW THIS LINE * * */
			(function() {
				var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
				dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
				(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
			})();
		</script>
		<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
		<a href="http://disqus.com" class="dsq-brlink">blog comments powered by <span class="logo-disqus">Disqus</span></a>
	</div>
</div>

<!-- Twitter -->
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

<!-- Google + -->
<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
</script>