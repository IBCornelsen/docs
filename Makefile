.PHONY: all serve install check_cargo check_mdbook

check_cargo:
	@if ! command -v cargo >/dev/null 2>&1; then \
		echo "cargo wird für dieses Projekt benötigt."; \
		exit 1; \
	fi

check_mdbook:
	@if ! command -v mdbook >/dev/null 2>&1; then \
		echo "mdbook wird für dieses Projekt benötigt."; \
		exit 1; \
	fi

install: check_cargo
	cargo install mdbook

build: check_mdbook
	mdbook build

serve: check_mdbook
	mdbook serve --open