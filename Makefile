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
	open index.html

Linux:
	xdg-open index.html