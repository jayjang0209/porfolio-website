default: install

npm-install:
	npm install

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

.PHONY: default install dev build lint start test
