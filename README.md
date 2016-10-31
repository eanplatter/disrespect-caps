# Disrespect Caps

An easy way to check if 'Yes' === 'yes'.

## Usage:
`$ npm i --save disrespect-caps`

```js
import disrespect from 'disrespect-caps'

disrespect('Hello', 'hello') // true
disrespect('Hello', 'hi') // false
```

## ![Y tho?](https://v.cdn.vine.co/r/avatars/E473812D2C1352847810483122176_5cfe0ade34d.21.0.jpg?versionId=JE3cQ9VQJWdVhmRIX6MnBfLN3Y0rdjLM)
Sometimes when building tools, like CLI tools I found myself checking for string inputs for certain things like "yes" "no" or "true" "false" and you sometimes get weird inputs
from your users, like "Yes" or "nO". This just irons out those things.

