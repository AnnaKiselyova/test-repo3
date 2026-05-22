# Lesson 3 — JavaScript Coding Standards

This document describes the JavaScript coding standards enforced by the project's ESLint configuration ([eslint.config.mjs](eslint.config.mjs)), and provides a reference for JavaScript primitive types, conditional statements (`if/else`, `switch`), and operators.

---

## Table of Contents

1. [ESLint Coding Standards](#1-eslint-coding-standards)
2. [JavaScript Types](#2-javascript-types)
3. [Conditional Statements](#3-conditional-statements)
   - [if / else](#31-if--else)
   - [switch](#32-switch)
4. [Operators](#4-operators)

---

## 1. ESLint Coding Standards

The project uses ESLint with the following plugins:

- `@eslint/js` — recommended rules
- `eslint-plugin-unicorn` — additional best practices
- `@stylistic/eslint-plugin` — stylistic rules

### 1.1 Formatting rules

| Rule | Value | Description |
|------|-------|-------------|
| `semi` | `'always'` | Statements must end with a semicolon `;` |
| `indent` | `4`, `SwitchCase: 1` | Use 4 spaces; `case` is indented one level inside `switch` |
| `max-len` | `140` (warn) | Maximum line length is 140 characters |
| `brace-style` | warn | Use the default `1tbs` brace style |
| `comma-dangle` | `'never'` | No trailing commas |
| `no-multiple-empty-lines` | `max: 2` | No more than 2 consecutive empty lines |
| `no-trailing-spaces` | error | No trailing whitespace |
| `eol-last` | `'always'` | Files must end with a newline |
| `@stylistic/quotes` | `'single'` (warn) | Use single quotes for strings |
| `@stylistic/space-before-blocks` | `'always'` | Space before `{` block |
| `@stylistic/arrow-spacing` | error | Space around `=>` in arrow functions |
| `@stylistic/space-infix-ops` | error | Spaces around binary operators (`a + b`, not `a+b`) |
| `keyword-spacing` | before & after | Space around keywords (`if (`, `} else {`) |
| `comma-spacing` | `before: false, after: true` | No space before comma, one space after |

### 1.2 Variable rules

| Rule | Value | Description |
|------|-------|-------------|
| `no-var` | error | Never use `var`; use `let` or `const` |
| `prefer-const` | error | Use `const` for variables that are never reassigned |
| `one-var-declaration-per-line` | `'initializations'` | One initialized declaration per line |

### 1.3 Filenames

| Rule | Value | Description |
|------|-------|-------------|
| `unicorn/filename-case` | `'kebabCase'` | File names must be in kebab-case (e.g. `my-module.js`) |

### 1.4 Examples

Correct:

```js
const userName = 'Anna';
let counter = 0;

if (counter === 0) {
    counter = counter + 1;
} else {
    counter = counter - 1;
}
```

Incorrect:

```js
var user_name = "Anna"     // double quotes, var, missing semicolon
let counter=0;             // no spaces around =
if(counter===0){           // no space after `if`, before `{`
counter=counter+1          // wrong indent, no spaces, no semicolon
}else{counter--}
```

---

## 2. JavaScript Types

JavaScript has **7 primitive types** and one **reference type** (`Object`).

### 2.1 Primitive types

| Type | Example | Description |
|------|---------|-------------|
| `string` | `'hello'`, `'42'` | A sequence of characters |
| `number` | `42`, `3.14`, `NaN`, `Infinity` | Integer or floating-point number |
| `bigint` | `9007199254740993n` | Arbitrary-precision integers (suffix `n`) |
| `boolean` | `true`, `false` | Logical value |
| `undefined` | `undefined` | Variable was declared but not assigned |
| `null` | `null` | Explicit "no value" |
| `symbol` | `Symbol('id')` | Unique, immutable identifier |

### 2.2 Reference type

| Type | Example | Description |
|------|---------|-------------|
| `object` | `{ name: 'Anna' }`, `[]`, `function () {}` | Collection of key/value pairs; arrays and functions are also objects |

### 2.3 Checking a type

Use `typeof` for primitives and `Array.isArray()` / `instanceof` for objects:

```js
typeof 'hello';        // 'string'
typeof 42;             // 'number'
typeof true;           // 'boolean'
typeof undefined;      // 'undefined'
typeof null;           // 'object'  (historical JS quirk)
typeof Symbol('id');   // 'symbol'
typeof {};             // 'object'
typeof [];             // 'object'
Array.isArray([]);     // true
```

### 2.4 Type conversion

```js
String(123);     // '123'
Number('42');    // 42
Boolean(0);      // false
Boolean('');     // false
Boolean('any');  // true
```

---

## 3. Conditional Statements

### 3.1 if / else

The `if` statement executes a block of code when a condition is truthy.

**Syntax:**

```js
if (condition) {
    // executed when condition is truthy
} else if (otherCondition) {
    // executed when otherCondition is truthy
} else {
    // executed otherwise
}
```

**Example:**

```js
const age = 18;

if (age < 13) {
    console.log('Child');
} else if (age < 18) {
    console.log('Teenager');
} else {
    console.log('Adult');
}
```

**Falsy values** (treated as `false` in conditions):
`false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, `NaN`.
All other values are **truthy**.

**Ternary operator** is a short form of `if/else` that returns a value:

```js
const status = age >= 18 ? 'Adult' : 'Minor';
```

**Style notes (per ESLint config):**

- Always use braces `{ }`, even for one-line bodies.
- Put a space between `if` and `(`, and between `)` and `{`.
- `else` goes on the same line as the closing brace: `} else {`.

### 3.2 switch

The `switch` statement compares a value against multiple `case` labels using **strict equality (`===`)**.

**Syntax:**

```js
switch (expression) {
    case value1:
        // ...
        break;
    case value2:
        // ...
        break;
    default:
        // executed when no case matches
}
```

**Example:**

```js
const day = 3;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    default:
        console.log('Other day');
}
```

**Important rules:**

- Without `break`, execution **falls through** to the next case (sometimes intentional).
- `default` is optional and handles unmatched values.
- `case` labels are indented one level inside the `switch` (`SwitchCase: 1`).

**Grouped cases (intentional fall-through):**

```js
switch (day) {
    case 6:
    case 7:
        console.log('Weekend');
        break;
    default:
        console.log('Weekday');
}
```

---

## 4. Operators

### 4.1 Arithmetic operators

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `+` | Addition | `2 + 3` | `5` |
| `-` | Subtraction | `5 - 2` | `3` |
| `*` | Multiplication | `4 * 2` | `8` |
| `/` | Division | `10 / 4` | `2.5` |
| `%` | Remainder | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |
| `++` | Increment | `let x = 1; x++` | `2` |
| `--` | Decrement | `let x = 1; x--` | `0` |

### 4.2 Assignment operators

| Operator | Equivalent to |
|----------|---------------|
| `x = y` | — |
| `x += y` | `x = x + y` |
| `x -= y` | `x = x - y` |
| `x *= y` | `x = x * y` |
| `x /= y` | `x = x / y` |
| `x %= y` | `x = x % y` |
| `x **= y` | `x = x ** y` |
| `x ??= y` | assign `y` only if `x` is `null`/`undefined` |
| `x ||= y` | assign `y` only if `x` is falsy |
| `x &&= y` | assign `y` only if `x` is truthy |

### 4.3 Comparison operators

| Operator | Description | Example |
|----------|-------------|---------|
| `==` | Loose equality (with type coercion) — **avoid** | `'5' == 5` → `true` |
| `===` | **Strict equality** (recommended) | `'5' === 5` → `false` |
| `!=` | Loose inequality — avoid | `'5' != 5` → `false` |
| `!==` | Strict inequality (recommended) | `'5' !== 5` → `true` |
| `>` | Greater than | `5 > 3` → `true` |
| `<` | Less than | `3 < 5` → `true` |
| `>=` | Greater than or equal | `5 >= 5` → `true` |
| `<=` | Less than or equal | `4 <= 5` → `true` |

> **Best practice:** always use `===` and `!==` to avoid implicit type coercion.

### 4.4 Logical operators

| Operator | Description | Example |
|----------|-------------|---------|
| `&&` | Logical AND — returns the first falsy or the last value | `true && 'ok'` → `'ok'` |
| `\|\|` | Logical OR — returns the first truthy or the last value | `'' \|\| 'default'` → `'default'` |
| `!` | Logical NOT | `!true` → `false` |
| `??` | Nullish coalescing — fallback only for `null`/`undefined` | `0 ?? 5` → `0`; `null ?? 5` → `5` |

### 4.5 String operators

```js
const greeting = 'Hello, ' + 'world!';     // concatenation
const name = 'Anna';
const message = `Hello, ${name}!`;         // template literal
```

### 4.6 Spread and rest

```js
const numbers = [1, 2, 3];
const more = [...numbers, 4, 5];           // spread: [1, 2, 3, 4, 5]

function sum(...args) {                    // rest: collects arguments
    return args.reduce((a, b) => a + b, 0);
}
```

### 4.7 Operator precedence (high → low)

1. `()` grouping
2. `++`, `--`, `!`, `typeof`
3. `**`
4. `*`, `/`, `%`
5. `+`, `-`
6. `<`, `<=`, `>`, `>=`
7. `===`, `!==`, `==`, `!=`
8. `&&`
9. `||`, `??`
10. `? :` (ternary)
11. `=`, `+=`, `-=`, …

When in doubt, use parentheses for clarity:

```js
const result = (a + b) * c;
```

---

## References

- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [MDN — JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [MDN — Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [MDN — Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)