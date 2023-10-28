# Vue UI Kit

UI components created with Vue 3 and Typescript.

Unit testing using Jest and Vue Testing Library.




## Quick start

*npm*:

```bash
  npm i kneekeetah-vue-ui-kit
```
*yarn*: 

```
  yarn add kneekeetah-vue-ui-kit
```
### After installation
- Import styles bundle to your *main* file:
```
import "kneekeetah-vue-ui-kit/dist/style.css";
```
Using Nuxt:
```
export default defineNuxtConfig({
  css: ['kneekeetah-vue-ui-kit/dist/style.css],
})

```
- Import components in your *.vue* files:

```
import { BaseDropdown, BaseInput, BaseButton } from "kneekeetah-vue-ui-kit";
```
