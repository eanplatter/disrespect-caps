# Disrespect Caps

An easy way to check if 'Yes' === 'yes'.

## Usage:
`$ npm i --save disrespect-caps`

```js
import disrespect from 'disrespect-caps'

disrespect('Hello', 'hello') // true
disrespect('Hello', 'hi') // false
```

## Y tho?
Sometimes when building tools, like CLI tools I found myself checking for string inputs for certain things like "yes" "no" or "true" "false" and you sometimes get weird inputs
from your users, like "Yes" or "nO". This just irons out those things.

