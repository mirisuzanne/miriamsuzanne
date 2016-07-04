import itertools


def unique_chain(iterable_of_iterables):
    return set(itertools.chain(*iterable_of_iterables))


def setup(builder):
    builder.jinja_env.filters['unique_chain'] = unique_chain
