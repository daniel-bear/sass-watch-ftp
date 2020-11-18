# sass-watch-ftp

### 3 second workflow
Write your SCSS/SASS, save file (ctrl+s) auto compile with gulp watch, and gulp upload (shift+space) via FTP to your server.

#### Note: If you want use a keybind shortcut (as above Shift+Space) instead of typing gulp upload, then follow the notes in the gulpfile.js

### Dependencies:

	run npm install --save-dev gulp gulp-debug gulp-ftp gulp-postcss gulp-sass node-notifier postcss run-sequence autoprefixer

### Next step:
Then go into node_modules/the-end-stream/index.js, near line 51 look for:

	var onclosenexttick = function()
  
Replace the entire function with:

	var onclosenexttick = function() {
		if (cancelled) return;
	};

### Configure paths:
Configure your paths as outlined in the gulp.js file.

### Optional, but optimal workflow:
This works best with 2 split terminals open. In VSCode from the top bar menu: Terminal > New Terminal:Split Terminals

Terminal 1

	gulp watch
Terminal 2

	gulp upload
	
### GUI
If anyone wants to turn this into a GUI go ahead, but gimme link. You could probably pull it off with Electron.
