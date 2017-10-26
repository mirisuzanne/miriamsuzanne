public: yes
tags: [sass, demo, code]
wrap: false
summary: |
  Jina asked twitter for help
  creating a rainbow-striped background gradient in Sass,
  with any set of colors.
  This is my solution.


******************************************
Create a striped css background using Sass
******************************************


Stripes Intro
=============

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


Stripes Function
================

Start by setting a variable to the colors you want:

.. code:: scss

  $rainbow: red orange yellow green blue indigo violet;

You could set individual variables for each color as well.
You would still pass them all as a single argument,
or join them into a single variable before passing, as you see fit.

Here's the function:

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

And how to use it:

.. code:: scss

  .rainbow {
    @include background-image(stripes(left, $rainbow));
  }

Jina has posted a demo and explanation
on CodePen_.

.. _CodePen: http://codepen.io/jina/pen/iosjp

(The real lesson here
is that all the colors of the rainbow
are acceptable CSS color keywords.
Go forth and queer the web.)
