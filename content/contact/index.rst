public: yes
location: 'contact'
tagline: "The Contact Form…"
hide_contact: yes
form:
  - email: 'miriam@miriamsuzanne.com'
    next: 'thanks'
    submit: 'send it!'
.. social:
..   - email: 'miriam@miriamsuzanne.com'
..     twitter: 'mirisuzanne'
..     github: 'mirisuzanne'
..     codepen: 'mirisuzanne'
.. title: 'stack overflow'
.. url: 'http://stackoverflow.com/users/1930386/'
.. tinyletter: 'Subscribe to my newsletter'
.. url: 'https://tinyletter.com/miriamsuzanne'
summary: |
  Leave me a note,
  and I'll get back to you as quick as I can.
  You can also find me (``mirisuzanne``) on
  `twitter`_, `github`_, `codepen`_,
  and other "social" sites.

  .. _twitter: http://twitter.com/mirisuzanne/
  .. _github: http://github.com/mirisuzanne/
  .. _codepen: http://codepen.com/mirisuzanne/


*********************
Start a Conversation!
*********************

.. callmacro:: contact.macros.j2#show_form
  :slug: 'contact/index'
  :data: 'form'
