# Tortilla

A boilerplate for rapid Angular app development using Browserify / SASS / Gulp.

<hr/>

### Getting started

Install all the dependencies:

	npm install

Update the Angular App namespaces in <code>src/scripts</code> and also in the views task in <code>gulpfile.js</code> so they use your namespace (they default to <em>TortillaApp</em>, <em>TortillaControllers</em> etc).

Start an express server to serve the site locally:

	node app.js

<hr/>

### Gulp tasks
	
Compile the SCSS files in <code>src/scss</code>:

	gulp sass
	
Compile the angular views in <code>src/views</code>:

	gulp views
	
Bundle all of the javascript source files with Browserify (required every time the views or the script files change).

	gulp scripts

A task that compiles the scss, the angular templates, lints the javascript, bundles it together and then runs the unit tests. Run it with <code>--production</code> and it will minify the CSS and JS:
	
	gulp build
	


<hr/>

### Any questions / suggestions?

Drop me an email <a href="mailto:dave@darve.co.uk">dave@darve.co.uk</a>.