# is-scrolltop-adjust

Judge browser support scrolltop auto adjust? Chrome and Firefox are supported, but Safari and other browser not.

# Install

    npm i is-scrolltop-adjust

# Use
### browser
```html
<script src="node_module/is-scrolltop-adjust/dist/index.build.js"></script>
<script>
  console.log(isScrolltopAdjust.default()); // true|false
</script>
```

### build env

```js

import isScrolltopAdjust from "is-scrolltop-adjust";

console.log(isScrolltopAdjust());

```
