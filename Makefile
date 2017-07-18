# Detect OS
UNAME = `uname`

# Build based on OS name
DetectOS: Precompile Stylecheck
	-@make $(UNAME)

# Precompile SASS into CSS
Precompile:
	echo "---Complete"

# Stylecheck
Stylecheck:
	# If the Stylecheck doesn't pass, stop here
	echo "---Complete"

# OSX
Darwin:
	echo "---Running Locally"
	open index.html
	echo "---Make Ended"

Linux:
	xdg-open index.html
