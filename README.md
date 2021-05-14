[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/rx-ts/ng-tslint)

# ng-tslint

Useful TSLint rules extracted from [`angular/components`](https://github.com/angular/components/tree/master/tools/tslint-rules) for Angular libraries.

## Install

```sh
# npm
npm i -D ng-tslint

# yarn
yarn add -D ng-tslint
```

## Rules

<!-- Rules start -->

### class-list-signatures

Rule that catches cases where `classList` is used in a way
that won't work in all browsers that we support.

### coercion-types

TSLint rule that verifies that classes declare corresponding `ngAcceptInputType_*`
static fields for inputs that use coercion inside of their setters. Also handles
inherited class members and members that come from an interface.

### lightweight-tokens

Rule that warns if a DI constructor is discovered for which parameters optionally
inject classes without using the lightweight token pattern. The rule intends to help
with optimized source code that works well for tree shakers. Read more about this here:
https://angular.io/guide/lightweight-injection-tokens.

### member-naming

Lint rule that checks the names of class members against a pattern. Configured per modifier, e.g.

```jsonc
{
  "member-naming": [
    true,
    {
      "private": "^_" // All private properties should start with `_`.
    }
  ]
}
```

### ng-on-changes-property-access

Rule that catches cases where a property of a `SimpleChanges` object is accessed directly,
rather than through a literal. Accessing properties of `SimpleChanges` directly can break
when using Closure's property renaming.

### no-cross-entry-point-relative-imports

Rule that enforces that imports or exports with relative paths do not resolve to
source files outside of the current Bazel package. This enforcement is necessary
because relative cross entry-point imports/exports can cause code being inlined
unintentionally and could break module resolution since the folder structure
changes in the Angular Package release output.

### no-exposed-todo

Rule that walks through all comments inside of the library and adds failures when it
detects TODO's inside of multi-line comments. TODOs need to be placed inside of single-line
comments.

### no-import-export-spacing

Rule that ensures that there are no spaces before/after the braces in import and export clauses.

### no-private-getters

Rule that doesn't allow private getters.

### no-undecorated-base-class-di

Rule that doesn't allow inheriting a constructor using dependency injection from an
undecorated base class. With Ivy, undecorated base classes cannot use dependency
injection. Classes that inherit the constructor from the base class can specify
an explicit pass-through constructor to make DI work.

### no-undecorated-class-with-angular-features

Rule that doesn't allow undecorated class declarations using Angular features.

### no-unescaped-html-tag

Rule that walks through all comments inside of the library and adds failures when it
detects unescaped HTML tags inside of multi-line comments.

### prefer-const-enum

Rule that enforces that we use `const enum` rather than a plain `enum`.

### require-breaking-change-version

Rule that ensures that comments, indicating a deprecation
or a breaking change, have a valid version.

### require-license-banner

Rule that walks through all TypeScript files of public packages and shows failures if a
file does not have the license banner at the top of the file.

### setters-after-getters

Rule that enforces that property setters are declared after getters.

### validate-decorators

Rule that enforces certain decorator properties to be defined and to match a pattern.
Properties can be forbidden by prefixing their name with a `!`. Supports specifying a matcher for
filtering valid files via the third argument, as well as validating all the arguments by passing
in a regex. E.g.

```jsonc
{
  "validate-decorators": [
    true,
    {
      "Component": {
        "argument": 0,
        "properties": {
          "encapsulation": "\\.None$",
          "!styles": ".*"
        }
      },
      "NgModule": {
        "argument": 0,
        "properties": "^(?!\\s*$).+"
      }
    },
    "src/material"
  ]
}
```

<!-- Rules end -->

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stg.me]: https://www.1stg.me
[jounqin]: https://GitHub.com/JounQin
[mit]: http://opensource.org/licenses/MIT
