public: yes
tags: [sass, demo, code]
summary: |
  In response to a request on twitter,
  I wrote a simple function
  for creating striped gradients
  with Sass.

Create a striped css background using Sass
==========================================

Jina_ asked twitter for Sass advice the other day.
She was working on a `bit of code`_ to create
a rainbow-striped background gradient
using any set of arbitrary colors.

This is my solution,
in the form of a Sass function.
This requires `Sass 3.2`_
(currently in alpha)
in order to run.

.. _Jina: https://twitter.com/jina/status/225811628338323458
.. _bit of code: https://gist.github.com/3140730
.. _Sass 3.2: http://rubygems.org/gems/sass


Variables
---------

.. code:: scss

  $rainbow: red orange yellow green blue indigo violet;

You could set individual variables for each color as well.
You would still pass them all as a single argument,
or join them into a single variable before passing, as you see fit.

Function
--------

.. code:: scss

  // Returns a striped gradient for use anywhere gradients are accepted.
  // - $position: the starting position or angle of the gradient.
  // - $colors: a list of all the colors to be used.
  @function stripes($position, $colors) {
    $colors: if(type-of($colors) != 'list', compact($colors), $colors);
    $gradient: compact();
    $width: 100% / length($colors);

    @for $i from 1 through length($colors) {
      $pop: nth($colors,$i);
      $new: $pop ($width * ($i - 1)), $pop ($width * $i);
      $gradient: join($gradient, $new, comma);
    }

    @return linear-gradient($position, $gradient);
  }

Use
---

.. code:: scss

  .rainbow {
    @include background-image(stripes(left, $rainbow));
  }

Demo
----

Here is the result:

.. raw:: html

  <div class="demo-rainbow"></div>

Jina has also posted a demo and explanation
on CodePen_.

.. _CodePen: http://codepen.io/jina/pen/iosjp

(The real lesson here
is that all the colors of the rainbow
are acceptable CSS color keywords.
Go forth and queer the web.)
