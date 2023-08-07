# petercrabtree.work
## Simple edition

This is meant to be a work sample, a resume site, and part of a blog on scaling software.

This is v1 of petercrabtree.work, a simple static page, optimized for getting something up quickly with some reasonable room to grow site functionality.

It's hosted on Cloudflare, using Cloudflare's Github integration.

## Technologies:
* [Docusaurus 2](https://docusaurus.io/)
* Cloudflare DNS/Proxying
* Cloudflare Pages (JAMstack platform)
* Git
* VS Code

##Services:
namecheap (domain registrar)
Github (code repo)
Cloudflare (Hosting/DNS/Proxying)

##Tools

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
