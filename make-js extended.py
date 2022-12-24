#!/usr/bin/env python3

import sys

if len(sys.argv) != 2:
    sys.exit('usage: make-js.py laluan/ke/rumi-jawi-tambahan.tsv') 
tsvpath = sys.argv[1]

with open('static/rumi-jawi-tambahan.js', 'w') as out:
    with open(tsvpath) as f:
        next(f)  # discard header
        parts = [line.rstrip() for line in f]
        data = '\\n'.join(parts).replace('"', '')
        print(f'var rjtambahan = "{data}";', file=out)
    print('''
rjtambahan.split("\\n").forEach(function (line) {
  let parts = line.split("\\t");
  let rumi = parts[0];
  let normRumi = rumi.toLowerCase();
  let jawi = parts[1];
  if (!rjmap.has(normRumi)) rjmap.set(normRumi, []);
  rjmap.get(normRumi).push(jawi);
  if (!jrmap.has(jawi)) jrmap.set(jawi, []);
  jrmap.get(jawi).push(rumi);
})
''', file=out)
