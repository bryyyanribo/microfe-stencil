## Create a Stencil Component

### Steps:

- npm init stencil
- component > todo-list-wc
- cd > npm i
- add todo list code
- if u want to run it (npm run start)
- npm run build

---

## Integrate our Stencil Component to Angular Framework

Steps:

### Install in Stencil Component:

- npm i @stencil/angular-output-target
- npm i @stencil/sass
- modify stencil config
- add src/libs/ folder and include relative path to dist directory of web-components
- add paths. make sure that path is same as package json name of tsconfig.json
- run npm run build inside web component to generate stencil library package
- edit web-components.module.ts
- import to app module
- import component to app component

```
<todo-list pageTitle="My Todo List"></todo-list>
```
