# Detect OS
UNAME = `uname`

# Build based on OS name
DetectOS:
	# Precompile SASS
	# Stylecheck
	# If the Stylecheck doesn't pass, stop here
	-@make $(UNAME)

# OSX
Darwin:
	open http://localhost:8000/index.html
	npm start

Linux:
	xdg-open http://localhost:8000/index.html
	npm start

install:
	sudo echo
	curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
	sudo apt-get install -y nodejs
	npm -v
	make

