default: dist/ipsum.browser.js

dist/ipsum.browser.js:
	mkdir -p dist/
	browserify ipsum.js -o dist/ipsum.browser.js

clean:
	rm dist/*
