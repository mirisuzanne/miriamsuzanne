public: yes
location: 'contact'
tagline: 'start a conversation...'
hide_contact: True
form:
  - email: 'miriam@miriamsuzanne.com'
    next: 'thanks'
    submit: 'send it!'
social:
  - email: 'miriam@miriamsuzanne.com'
    twitter: 'mirisuzanne'
    github: 'mirisuzanne'
    codepen: 'mirisuzanne'


Contact Me
==========

Talk to me about art, code, and collaboration;
hire me to speak,
or just say hello:

.. callmacro:: contact.macros.j2#show_form
  :slug: 'contact'
  :data: 'form'

.. callmacro:: contact.macros.j2#social
  :slug: 'contact'
  :data: 'social'
