# -*- coding: utf-8 -*-
"""
Add an |rst filter to the jinja templates…
"""

from docutils.core import publish_parts
import jinja2


def rst_filter(s):
    return jinja2.Markup(publish_parts(source=s, writer_name='html')['body'])


def setup(builder):
    env = builder.jinja_env
    env.filters['rst'] = rst_filter
