<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isSquareTriangularNumber

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [square triangular number][square-triangular-number].

<section class="intro">

A **square triangular number** is an integer value which is both a [square number][@stdlib/assert/is-square-number] and a [triangular number][@stdlib/assert/is-triangular-number].

[Triangular numbers][@stdlib/assert/is-triangular-number] can be computed using the following formula

<!-- <equation class="equation" label="eq:triangular_number" align="center" raw="T_n = \frac{n(n+1)}{2}" alt="Triangular number formula."> -->

```math
T_n = \frac{n(n+1)}{2}
```

<!-- <div class="equation" align="center" data-raw-text="T_n = \frac{n(n+1)}{2}" data-equation="eq:triangular_number">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@b295a09a80f4fd0cc84682dcda0fe3e354394c0c/lib/node_modules/@stdlib/assert/is-square-triangular-number/docs/img/equation_triangular_number.svg" alt="Triangular number formula.">
    <br>
</div> -->

<!-- </equation> -->

for `n >= 0`.

By analogy with the square root of `x`, one can define the positive triangular root of `x` such that `T_n = x`

<!-- <equation class="equation" label="eq:triangular_root" align="center" raw="n = \frac{\sqrt{8x+1} - 1}{2}" alt="Triangular root formula."> -->

```math
n = \frac{\sqrt{8x+1} - 1}{2}
```

<!-- <div class="equation" align="center" data-raw-text="n = \frac{\sqrt{8x+1} - 1}{2}" data-equation="eq:triangular_root">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@b295a09a80f4fd0cc84682dcda0fe3e354394c0c/lib/node_modules/@stdlib/assert/is-square-triangular-number/docs/img/equation_triangular_root.svg" alt="Triangular root formula.">
    <br>
</div> -->

<!-- </equation> -->

Accordingly, an integer `x` is a [triangular number][@stdlib/assert/is-triangular-number] **if and only** if `8x+1` is a [square number][@stdlib/assert/is-square-number].

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-square-triangular-number
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var isSquareTriangularNumber = require( '@stdlib/assert-is-square-triangular-number' );
```

#### isSquareTriangularNumber( value )

Tests if a `value` is a [square triangular number][square-triangular-number].

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isSquareTriangularNumber( 36.0 );
// returns true

bool = isSquareTriangularNumber( new Number( 36.0 ) );
// returns true

bool = isSquareTriangularNumber( 3.14 );
// returns false

bool = isSquareTriangularNumber( -5.0 );
// returns false

bool = isSquareTriangularNumber( NaN );
// returns false

bool = isSquareTriangularNumber( null );
// returns false
```

#### isSquareTriangularNumber.isPrimitive( value )

Tests if a `value` is a primitive [square triangular number][square-triangular-number].

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isSquareTriangularNumber.isPrimitive( 36.0 );
// returns true

bool = isSquareTriangularNumber.isPrimitive( new Number( 36.0 ) );
// returns false
```

#### isSquareTriangularNumber.isObject( value )

Tests if a `value` is a `Number` object having a value which is a [square triangular number][square-triangular-number].

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isSquareTriangularNumber.isObject( 36.0 );
// returns false

bool = isSquareTriangularNumber.isObject( new Number( 36.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Return values are not reliable for numbers greater than `1125899906842624`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number-ctor' );
var isSquareTriangularNumber = require( '@stdlib/assert-is-square-triangular-number' );

var bool = isSquareTriangularNumber( 36.0 );
// returns true

bool = isSquareTriangularNumber( new Number( 36.0 ) );
// returns true

bool = isSquareTriangularNumber( 0.0 );
// returns true

bool = isSquareTriangularNumber( 1.0 );
// returns true

bool = isSquareTriangularNumber( 3.14 );
// returns false

bool = isSquareTriangularNumber( -5.0 );
// returns false

bool = isSquareTriangularNumber( NaN );
// returns false

bool = isSquareTriangularNumber( '0.5' );
// returns false

bool = isSquareTriangularNumber( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-integer`][@stdlib/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having an integer value.</span>
-   <span class="package-name">[`@stdlib/assert-is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>
-   <span class="package-name">[`@stdlib/assert-is-square-number`][@stdlib/assert/is-square-number]</span><span class="delimiter">: </span><span class="description">test if a value is a square number.</span>
-   <span class="package-name">[`@stdlib/assert-is-triangular-number`][@stdlib/assert/is-triangular-number]</span><span class="delimiter">: </span><span class="description">test if a value is a triangular number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-square-triangular-number.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-square-triangular-number

[test-image]: https://github.com/stdlib-js/assert-is-square-triangular-number/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-square-triangular-number/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-square-triangular-number/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-square-triangular-number?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-square-triangular-number.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-square-triangular-number/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-square-triangular-number/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-square-triangular-number/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-square-triangular-number/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-square-triangular-number/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-square-triangular-number/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-square-triangular-number/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-square-triangular-number/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-square-triangular-number/main/LICENSE

[square-triangular-number]: https://en.wikipedia.org/wiki/Square_triangular_number

<!-- <related-links> -->

[@stdlib/assert/is-integer]: https://github.com/stdlib-js/assert-is-integer

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert-is-number

[@stdlib/assert/is-square-number]: https://github.com/stdlib-js/assert-is-square-number

[@stdlib/assert/is-triangular-number]: https://github.com/stdlib-js/assert-is-triangular-number

<!-- </related-links> -->

</section>

<!-- /.links -->
