Miriam Eric Suzanne
===================

The official website for Miriam Eric Suzanne.


Development
-----------

If you want to run this project in a `virtualenv`_
to isolate it from other Python projects on your system,
create a virtualenv and activate it.
Then run ``pip install -r requirements.txt``
to install the dependencies for this project
into your Python environment.

.. _virtualenv: http://www.virtualenv.org

Run ``yarn`` to install
all the required npm packages
for linting and compiling Sass.

The site templates are in ``templates/``,
and static files are in ``static/``.

To view the site live locally,
run ``make serve`` to watch rst content files,
or ``gulp`` to watch and compile Sass files as well —
then visit ``http://localhost:5000`` in your browser.

To regenerate the site as static HTML files
under the ``gh-pages/`` directory,
run ``make build``.


Deployment
----------

Change into the ``gh-pages`` directory
and commit the changes.

If you're ready to deploy them, ``git push``.
Then change back into the outer repo
and you can commit the changes there
along with the updated submodule.
