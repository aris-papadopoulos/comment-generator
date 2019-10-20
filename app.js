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

const typeProbabilities = { 0: 0.21, 1: 0.24, 2: 0.23, 3: 0.24, 4: 0.08 }
const adverbDefaultProbabilities = { 0: 0.15, 1: 0.10, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05 }
const adjectiveDefaultProbabilities = { 0: 0.15, 1: 0.10, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05, 10: 0.10, 11: 0.10, 12: 0.10, 13: 0.10, 14: 0.05 }
const interjectionDefaultProbabilities = { 0: 0.04, 1: 0.03, 2: 0.93 }
const typeVCnounProbabilities = { 0: 0.5, 1: 0, 2: 0.5, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }

const types = [
    {
        name: 'Adjective',
        following: adjectiveDefaultProbabilities, // Use Default
    },
    {
        name: 'Adjective + Noun',
        following: adjectiveDefaultProbabilities // Use Default
    },
    {
        name: 'Adverb + Adjective',
        following: { 0: 0.15, 1: 0.10, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05 } // Use Default
    },
    {
        name: 'Adverb + Adjective + Noun',
        following: adjectiveDefaultProbabilities // Use Default
    },
    {
        name: 'Interjection',
        following: interjectionDefaultProbabilities // Use Default
    },
    {
        name: 'Something about view or colors',
        following: adjectiveDefaultProbabilities // Use Default
    }
]

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
const adverbs = [
    {
        name: 'So',
        adjectives: { 0: 0.15, 1: 0.10, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05, 10: 0.10, 11: 0.10, 12: 0.10, 13: 0.10 }
    },
    {
        name: 'Such',
        adjectives: { 0: 0.15, 1: 0.10, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05, 10: 0.10, 11: 0.10, 12: 0.10, 13: 0.10 }
    },
    {
        name: 'Such a',
        adjectives: { 0: 0.15, 1: 0.10, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05, 10: 0.10, 11: 0.10, 12: 0.10, 13: 0.10 }
    },
    {
        name: 'Such an',
        adjectives: { 0: 0.15, 1: 0.10, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05, 10: 0.10, 11: 0.10, 12: 0.10, 13: 0.10 }
    },
    {
        name: 'Really',
        adjectives: { 0: 0.15, 1: 0.10, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05, 10: 0.10, 11: 0.10, 12: 0.10, 13: 0.10 }
    },
    {
        name: 'Truly',
        adjectives: { 0: 0.15, 1: 0.10, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05, 10: 0.10, 11: 0.10, 12: 0.10, 13: 0.10 }
    },
    {
        name: 'Very',
        adjectives: { 0: 0.15, 1: 0.10, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05, 10: 0.10, 11: 0.10, 12: 0.10, 13: 0.10 }
    },
    {
        name: 'How',
        adjectives: { 0: 0.15, 1: 0.10, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05, 10: 0.10, 11: 0.10, 12: 0.10, 13: 0.10 }
    },
    {
        name: 'What a',
        adjectives: { 0: 0.15, 1: 0.10, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05, 10: 0.10, 11: 0.10, 12: 0.10, 13: 0.10 }
    },
    {
        name: 'What an',
        adjectives: { 0: 0.15, 1: 0.10, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05, 10: 0.10, 11: 0.10, 12: 0.10, 13: 0.10 }
    },
]
const interjections = ['Wow! ', 'Wow, ', ''];

function getRandomItem(category, probabilities) {
    const randomItem = weightedRand(probabilities);
    item = category[randomItem()];
    return item;
}

function generateComment() {
    const type = getRandomItem(types, typeProbabilities);
    const adverb = getRandomItem(adverbs, adverbDefaultProbabilities);
    const adjective = getRandomItem(adjectives, adjectiveDefaultProbabilities);
    const adverbAdjective = getRandomItem(adjectives, adverb.adjectives);
    const adjectiveNoun = getRandomItem(nouns, adjective.nouns);
    const interjection = getRandomItem(interjections, interjectionDefaultProbabilities);
    console.log(type, adverb, adjective, adverbAdjective, adjectiveNoun, interjection);
    switch(type.name) {
        case 'Adjective':
            return {
                text: `${interjection}${adjective.name}`,
                type: type.name
            }
        case 'Adjective + Noun': 
            return {
                text: `${interjection}${adjective.name} ${adjectiveNoun}`,
                type: type.name
            }
        case 'Adverb + Adjective': 
            return {
                text: `${interjection}${adverb.name} ${adverbAdjective.name}`,
                type: type.name
            }
        case 'Adverb + Adjective + Noun': 
            return {
                text: `${interjection}${adverb.name} ${adverbAdjective.name} ${adjectiveNoun}`,
                type: type.name
            }
        case 'Interjection':
            return {
                text: interjections[0],
                type: 'Interjection'
            }
        case 'Something about view or colors': 
            return {
                text: `The ${noun} is ${adverb.name} ${adjective.name}`,
                type: type.name
            }
        default:
            return 'Something went wrong. Try again.';
    }
}


document.getElementById('generate-comment').onclick=function(){
    const comment = generateComment();
    console.log(comment.type);
    document.getElementById('comment-text').innerHTML = comment.text;
}