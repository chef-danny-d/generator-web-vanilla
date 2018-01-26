## Installation

First, install [Yeoman](http://yeoman.io) and generator-web-vanilla using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

#### To get node.js
```bash
sudo apt-get install -g nodejs-legacy
```
#### To get the generator
```bash
npm install -g yo
npm install -g generator-web-vanilla-static
```
*please note that if the following command gives you errors, you have to run it with ```sudo``` command*

#### Creating your new project

```bash
mkdir your-director
cd your-directory
yo web-vanilla-static
```
#### Making it a git repo
*note that you need to go on https://github.com first and create a repo online, only after that can you initialize it*

```bash
git init
git remote add origin https://github.com/<username>/<reponame>.git
git commit -m "init"
git push -u origin master
```

## A little about Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).
