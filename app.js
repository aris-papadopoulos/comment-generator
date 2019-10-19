function weightedRand(spec) {
  var i, j, table=[];
  for (i in spec) {
    // The constant 10 below should be computed based on the
    // weights in the spec for a correct and optimal table size.
    // E.g. the spec {0:0.999, 1:0.001} will break this impl.
    for (j=0; j<spec[i]*10; j++) {
      table.push(i);
    }
  }
  return function() {
    return table[Math.floor(Math.random() * table.length)];
  }
}

var rand012 = weightedRand({0:0.8, 1:0.1, 2:0.1});
rand012(); // random in distribution...


const nouns = ['view', 'photo', 'colors', 'pic', 'picture', 'scenery', 'spot', 'landscape', 'shot', 'frame'];
const adjectives = [
  {
      name: 'nice',
      nouns: { 0: 0.15, 1: 0.1, 2: 0.15, 3: 0.1, 4: 0.1, 5: 0.05, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05 }
  },
  {
      name: 'amazing',
      nouns: { 0: 0.15, 1: 0.1, 2: 0.15, 3: 0.1, 4: 0.1, 5: 0.05, 6: 0.05, 7: 0.1, 8: 0.1, 9: 0.1 }
  },
  {
      name: 'beautiful',
      nouns: { 0: 0.15, 1: 0.1, 2: 0.15, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.05, 9: 0.05 }
  },
  {
      name: 'mesmerizing',
      nouns: { 0: 0.15, 1: 0.1, 2: 0.2, 3: 0, 4: 0.1, 5: 0.15, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0 }
  },
  {
      name: 'lovely',
      nouns: { 0: 0.15, 1: 0.1, 2: 0.15, 3: 0.05, 4: 0.1, 5: 0.05, 6: 0.1, 7: 0.15, 8: 0.1, 9: 0.05 }
  },
  {
      name: 'peaceful',
      nouns: { 0: 0.15, 1: 0.1, 2: 0.15, 3: 0.1, 4: 0.1, 5: 0.05, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05 }
  },
  {
      name: 'perfect',
      nouns: { 0: 0.15, 1: 0.1, 2: 0.15, 3: 0.1, 4: 0.1, 5: 0.05, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05 }
  },
  {
      name: 'unique',
      nouns: { 0: 0.15, 1: 0.1, 2: 0.15, 3: 0.1, 4: 0.1, 5: 0.05, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05 }
  },
  {
      name: 'dreamy',
      nouns: { 0: 0.15, 1: 0.1, 2: 0.15, 3: 0.1, 4: 0.1, 5: 0.05, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05 }
  },
  {
      name: 'marvelous',
      nouns: { 0: 0.15, 1: 0.1, 2: 0.15, 3: 0.1, 4: 0.1, 5: 0.05, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05 }
  },
  {
      name: 'calm',
      nouns: { 0: 0.15, 1: 0.1, 2: 0.15, 3: 0.1, 4: 0.1, 5: 0.05, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05 }
  },
  {
      name: 'great',
      nouns: { 0: 0.15, 1: 0.1, 2: 0.15, 3: 0.1, 4: 0.1, 5: 0.05, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05 }
  },
  {
      name: 'impressive',
      nouns: { 0: 0.15, 1: 0.1, 2: 0.15, 3: 0.1, 4: 0.1, 5: 0.05, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05 }
  },
  {
      name: 'stunning',
      nouns: { 0: 0.15, 1: 0.1, 2: 0.15, 3: 0.1, 4: 0.1, 5: 0.05, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05 }
  }
]