public: yes
event_type: ['talk']
slides: 'https://www.oddbooksapp.com/book/css-layout'
image:
  - src: 'talks/devconf-best.jpg'
events:
  - venue: 'ElectronConf'
    url: 'http://electronconf.com/'
    date: [2019, 1, 15]
    end: [2019, 1, 15]
    adr: 'San Francisco, CA'
  - venue: 'Beyond Tellerand'
    url: 'https://beyondtellerrand.com/events/duesseldorf-2018'
    date: [2018, 5, 7]
    end: [2018, 5, 7]
    adr: 'Düsseldorf, Germany'
    slides: 'https://oddbooksapp.com/release/ce37ef91-8bd8-43e2-932a-66931b4b25ce'
    video: '<iframe src="https://player.vimeo.com/video/268576559" width="640" height="360" frameborder="0" allowfullscreen></iframe>'
    video_link: 'https://vimeo.com/268576559'
  - venue: 'Clarity Conference'
    url: 'https://www.clarityconf.com/2017'
    date: [2017, 11, 28]
    end: [2017, 11, 28]
    adr: 'San Francisco, CA'
    slides: 'https://oddbooksapp.com/release/ae641b90-8efa-4b1e-8da8-16940edf420d'
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Prc_V-j6yS4?rel=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'
    video_link: 'https://youtu.be/Prc_V-j6yS4'
  - venue: 'CSS Dev Conf'
    url: 'http://2017.cssdevconf.com/'
    date: [2017, 10, 9]
    end: [2017, 10, 9]
    adr: 'New Orleans, LA'
    note: "Audience-Choice 'Best Of' Award"
    slides: 'https://oddbooksapp.com/release/0434d9c1-4e89-4827-abfc-4d3942fa305d'
  - venue: 'DjangoCon US'
    url: 'https://2017.djangocon.us/'
    date: [2017, 8, 14]
    end: [2017, 8, 14]
    adr: 'Spokane, WA'
    slides: 'https://www.oddbooksapp.com/book/djangocon-layout'
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mDRfFEcj3-Q" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'
    video_link: 'https://youtu.be/mDRfFEcj3-Q'
after:
  - include: 'events/_by-page.html.j2'
    title: 'Upcoming Appearances'
  - include: 'events/_by-page.html.j2'
    title: 'Featured Video'
    show: 'video'
    count: 1
  - include: 'events/_by-page.html.j2'
    title: 'Past Appearances'
    show: 'past'
brag: |
  The creator of `Susy`_
  provides **practical techniques**
  for avoiding grid systems.
  **"Best Of" CSS Dev Conf, 2017**.

  .. _Susy: /susy/
summary: |
  A complete guide to the history of web layout,
  how grid systems work,
  and practical tip to avoid using them --
  from the creator of `Susy`_.
  For those few cases where a grid really is required,
  we'll talk about the best ways to roll your own,
  so you're not relying on a bloated library to make decisions for you.
  We'll also look at the new layout toys —
  from flexbox to CSS Grid —
  and how to get started with only a few lines of code.

  .. _Susy: /susy/


Don't Use My Grid System
========================

- When to use floats, CSS Grid, flexbox, custom properties, and other techniques.
- How to make grid-math simple, and lose the grid-system.
- How to make grid-systems work for you when you need them.
