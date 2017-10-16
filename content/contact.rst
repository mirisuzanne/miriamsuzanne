public: yes
location: 'contact'
tagline: 'start a conversation...'
hide_contact: yes
image:
  - src: 'headshots/mia-smirk.jpg'
form:
  - email: 'miriam@miriamsuzanne.com'
    next: 'thanks'
    submit: 'send it!'
social:
  - email: 'miriam@miriamsuzanne.com'
    twitter: 'mirisuzanne'
    github: 'mirisuzanne'
    codepen: 'mirisuzanne'
.. title: 'stack overflow'
.. url: 'http://stackoverflow.com/users/1930386/'
.. tinyletter: 'Subscribe to my newsletter'
.. url: 'https://tinyletter.com/miriamsuzanne'


***********
Contact Mia
***********


.. callmacro:: contact.macros.j2#show_form
  :slug: 'contact'
  :data: 'form'


.. callmacro:: contact.macros.j2#social
  :slug: 'contact'
  :data: 'social'
