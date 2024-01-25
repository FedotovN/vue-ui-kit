# Vue UI Kit

UI components created with Vue 3 and Typescript.

Unit testing using Vitest.

## Quick start

_npm_:

```bash
  npm i kneekeetah-vue-ui-kit
```

_yarn_:

```
  yarn add kneekeetah-vue-ui-kit
```

### After installation

- Import styles bundle to your _main_ file:

```
import "kneekeetah-vue-ui-kit/dist/style.css";
```

Using Nuxt:

```
export default defineNuxtConfig({
  css: ['kneekeetah-vue-ui-kit/dist/style.css],
})
```

- Import components in your _.vue_ files:

```
import { BaseDropdown, BaseInput, BaseButton } from "kneekeetah-vue-ui-kit";
```
