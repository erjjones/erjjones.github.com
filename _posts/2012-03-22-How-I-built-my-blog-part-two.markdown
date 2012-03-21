---
layout: post
title: How I built my blog part two
category: Coding
tags: jekyll github rss
year: 2012
month: 3
day: 22
published: false
summary: Part two on how I built my blog
---

<div class="row">
	<div class="span3 columns">
	  <h3>About this topic</h3>
	  <p>After posting my <a href="http://erjjones.github.com/blog/How-I-built-my-blog-in-one-day/" title="Go to How I built my blog in one day">last blog post</a> I realized I had much more to share.  You can download all of the source code here.</p>	  
	  <p><a href="https://github.com/erjjones/erjjones.github.com/zipball/master" class="btn btn-info">Download source</a></p>
	  <br/>
	  <h3>Topic buzz</h3>
	  <p>What others are thinking. Add to the conversation and generate some chatter.</p>
	  <p><a href="https://twitter.com/share" class="twitter-share-button" data-via="erjjones">Tweet</a></p>
	  <p><g:plusone size="medium"></g:plusone></p>	  
	  <p><script type="text/javascript" src="http://www.reddit.com/buttonlite.js?i=2&styled=off&url=http://erjjones.github.com{{ page.url }}&newwindow=1"></script></p> 	  	  
	  <br/>
	  <h3>Read later</h3>
	  <p>Save this article for a later read or point of reference. <a href="http://www.instapaper.com/hello2?url=http://erjjones.github.com{{ page.url }}&title={{ page.title }}" title="Save {{ page.title }} to Instapaper" target="_blank">+Instapaper</a> <a href="http://www.delicious.com/save" title="Save {{ page.title }} to Delicious" onclick="window.open('http://www.delicious.com/save?v=5&noui&jump=close&url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title), 'delicious','toolbar=no,width=550,height=550'); return false;">+Delicious</a></p>
	  <br/>
	  <h3>Hacker News Feed</h3>
	  <p><a href="http://news.ycombinator.com/item?id=" target="_blank" title="Read what others are saying on news.ycombinator right now">Read what others are saying</a> on news.ycombinator right now.</p>
	  <br/>
	  <h3>Enjoy The Article?</h3>
	  <p><a href="http://flattr.com/thing/589122/Eric-Jones" target="_blank"><img src="http://api.flattr.com/button/flattr-badge-large.png" alt="Flattr this" title="Flattr this" border="0" /></a></p>
	</div>	
	<div class="span9 columns">
	  <h2>Preface</h2>
	  <p>I choose to turn my GitHub user page into a blog, and here are a few more ways to make it dynamic that wasn't covered in the last post.  Again this is not new by any means just aggregated into one place to make it easier to share.</p>  	 	  
	  <hr>
	  <h2>RSS Feed</h2>
	  <p>Initially when using a GitHub user page I thought that I could use <code>https://github.com/erjjones.atom</code> to hook up my RSS feed on <a href="http://feedburner.google.com" title="Go to feedburner.google.com">feed burner</a>, but I had a hard time getting Feed Burner to register it.  I noticed on <a href="http://zachholman.com/" title="Go to Zach Holmans site">Zach Holman's</a> user page he had a <code>atom.xml</code> file and after further review you see that it is configured to register exactly what I needed to setup the RSS feed.</p>
	  <script src="https://gist.github.com/2026283.js"> </script>
	  <hr>
	  <h2>README (.md)</h2>
	  <p>Save your README file to README.md.</p>
	  <script src="https://gist.github.com/2026341.js"> </script>
	  <hr>
	  <h2>Google Analytics</h2>
	  <p>Setup Google Analytics to see how your site is doing.</p>
	  <h2>Flattr</h2>
	  <p>Social Micro Payments</p>
	  <hr>
	  <h2>In Conclusion</h2>
	  <p>Again, I hope this sparks you to try out GitHub, Jekyll, Twitter Bootstrap and other open source web resources.  I have just begun to scratch the surface here and this blog doesn't attempt to cover all of details but I would like to hear what other cool integrations people are doing on their blogs.</p>	  
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
			var disqus_identifier = '{{ page.url }}';
			var disqus_url = '{{ page.url }}';
			
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