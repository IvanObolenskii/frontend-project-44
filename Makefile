# Makefile

# Default rule
all:
	@echo "Use 'make install' to install dependencies"

# Rule for installing dependencies
install:
	npm ci

# Rule for running brain-games
brain-games:
	node bin/brain-games.js

# Rule for publish command
publish:
	npm publish --dry-run

# Rule for running ESLint
lint:
	npx eslint .

.PHONY: all install brain-games publish lint