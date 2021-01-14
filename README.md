# Torrent Search

Search public torrent sites.

## Installation

Requires [Node.js](https://nodejs.org/).

Clone the repository with [Git](https://git-scm.com/).

```
git clone https://github.com/travishorn/torrentsearch
```

Or [download](https://github.com/travishorn/torrentsearch/archive/main.zip) and unzip the files.

Change into the directory and install dependencies.

```
cd torrentsearch
npm install
```

## Development

Run the development server

```
npm run dev
```

A hot-reloadable browser window will automatically open.

## Deployment

The project is already configured for deployment on [Netlify](https://www.netlify.com/).

First, make sure you have created a fork or otherwise have a GitHub remote set up for this repository.

Link the repository to Netlify.

```
npx netlify init
```

Follow the command line prompts and authorize any third-party access to or from Netlify and GitHub.

The site is automatically pulled over from GitHub, built, and deployed. The site will continue to automatically deploy every time you push to GitHub.

You can open the deployed site from the command line.

```
npx netlify open:site
```

## To Do

1. Magnet links in the search results

## License

The MIT License

Copyright (c) 2021 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
