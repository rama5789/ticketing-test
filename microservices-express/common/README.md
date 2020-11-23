# @rama89tickets/common :

- It is a "Shared Library" module for Ticketing App.

# package.json :

```js
--------------------------------------
// Using Yarn | Npm with Git:

{
  "scripts": {
    "clean": "del ./build/*",
    "build": "yarn clean && tsc",
    "pub_npm": "git add . && git commit -m \"Updates\" && yarn version --patch && yarn build && yarn publish"
    "pub_yarn": "git add . && git commit -m \"Updates\" && npm version patch && npm run build && npm publish"
  }
}

```
