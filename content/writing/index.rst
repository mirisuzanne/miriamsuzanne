public: yes
event_type: reading
after:
  - include: 'content/_feature.html.j2'
    slugs:
      - ['writing/ridingsidesaddle', 'large']
      - ['writing/csstricks', 'small']
      - ['writing/twinedfragments', 'small']
      - ['writing/jumpstartsass', 'large']
      - ['writing/10myths', 'small']
      - ['writing/postobsolete', 'small']
  - include: 'blog/_taglist.html.j2'
    tag: 'writing'
summary: |
  Miriam is
  a staff writer at `CSS Tricks`_ and `OddBird`_,
  author of `Riding SideSaddle*`_ (*SpringGun Press*),
  co-author of `Jump Start Sass`_ (*SitePoint*),
  and `award-winning playwright`_.
  Her work has also appeared in
  *Denver Quarterly*, *SuperYesMore*, *Print!*,
  and others.

  .. _CSS Tricks: https://css-tricks.com/author/miriam/
  .. _OddBird: http://oddbird.net/authors/miriam/
  .. _Riding SideSaddle*: ridingsidesaddle/
  .. _Jump Start Sass: jumpstartsass/
  .. _The Post-Obsolete Book: post-obsolete/
  .. _award-winning playwright: 10myths/

  .. callmacro:: content/macros.j2#btn
    :url: 'http://oddbird.net/'
    :content: 'Check out OddBird'


****************************
Writing: Fiction & Otherwise
****************************


.. callmacro:: events/macros.j2#by_type
  :title: 'Upcoming Readings'
  :event_type: ['reading']
