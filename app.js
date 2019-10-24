/**
 * Generic function for randomly returning an item position in array, given the probabilities
 * @param {*} spec 
 */
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

// Standard-Default Probabilities
const typeProbabilities = { 0: 0.16, 1: 0.20, 2: 0.18, 3: 0.18, 4: 0.12, 5: 0.16 };

const adverbDefaultProbabilities = { 0: 0.15, 1: 0.10, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05 };
const adjectiveDefaultProbabilities = { 0: 0.15, 1: 0.15, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05, 10: 0, 11: 0.10, 12: 0.10, 13: 0.10, 14: 0.1 };
const nounDefaultProbabilities = { 0: 0.15, 1: 0.1, 2: 0.15, 3: 0.05, 4: 0.1, 5: 0.05, 6: 0.1, 7: 0.1, 8: 0.15, 9: 0.05 };

const interjectionDefaultProbabilities = { 0: 0.04, 1: 0.03, 2: 0.93 };
const exclamationMarkProbabilities = { 0: 0.25, 1: 0.55, 2: 0.2 };

const typeVCnounProbabilities = { 0: 0.5, 1: 0, 2: 0.5, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
const typeVCadverbProbabilities = { 0: 0.4, 1: 0, 2: 0, 3: 0, 4: 0.24, 5: 0.18, 6: 0.18, 7: 0, 8: 0, 9: 0 };
const typeAAadverbProbabilities = { 0: 0.3, 1: 0, 2: 0, 3: 0, 4: 0.20, 5: 0.15, 6: 0.15, 7: 0.20, 8: 0, 9: 0 };

// Comment Types
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
        following: typeAAadverbProbabilities
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
        following: typeVCnounProbabilities
    }
]

// Main Comment Entities
const nouns = ['view', 'photo', 'colors', 'pic', 'picture', 'scenery', 'spot', 'landscape', 'shot', 'frame'];
const adjectives = [
    {
        name: 'nice',
        nouns: nounDefaultProbabilities
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
        nouns: { 0: 0.45, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0.40, 7: 0.15, 8: 0, 9: 0 }
    },
    {
        name: 'perfect',
        nouns: nounDefaultProbabilities
    },
    {
        name: 'unique',
        nouns: { 0: 0.20, 1: 0, 2: 0.2, 3: 0, 4: 0, 5: 0.1, 6: 0.15, 7: 0.1, 8: 0.20, 9: 0.05 }
    },
    {
        name: 'dreamy',
        nouns: nounDefaultProbabilities
    },
    {
        name: 'marvelous',
        nouns: nounDefaultProbabilities
    },
    {
        name: 'calm',
        nouns: { 0: 0.55, 1: 0, 2: 0.15, 3: 0, 4: 0, 5: 0.3, 6: 0, 7: 0, 8: 0, 9: 0 }
    },
    {
        name: 'great',
        nouns: nounDefaultProbabilities
    },
    {
        name: 'impressive',
        nouns: nounDefaultProbabilities
    },
    {
        name: 'stunning',
        nouns: nounDefaultProbabilities
    },
    {
        name: 'breathtaking',
        nouns: { 0: 0.35, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0.15, 6: 0, 7: 0.15, 8: 0.35, 9: 0 }
    },
]
const adverbs = [
    {
        name: 'So',
        adjectives: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0.1, 11: 0.05, 12: 0.1, 13: 0.05, 14: 0 },
        adjectivesWithNoun: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0.1, 11: 0.05, 12: 0.1, 13: 0.05, 14: 0 },
    },
    {
        name: 'Such',
        adjectives: { },
        adjectivesWithNoun: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0.1, 11: 0.05, 12: 0.1, 13: 0.05, 14: 0 },
    },
    {
        name: 'Such a',
        adjectives: { },
        adjectivesWithNoun: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0.1, 11: 0.05, 12: 0.1, 13: 0.05, 14: 0 },
    },
    {
        name: 'Such an',
        adjectives: { },
        adjectivesWithNoun: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0.1, 11: 0.05, 12: 0.1, 13: 0.05, 14: 0 },
    },
    {
        name: 'Really',
        adjectives: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.05, 5: 0.1, 6: 0.05, 7: 0.1, 8: 0.05, 9: 0.05, 10: 0.1, 11: 0.05, 12: 0.1, 13: 0.05, 14: 0.1 },
        adjectivesWithNoun: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0.1, 11: 0.05, 12: 0.1, 13: 0.05, 14: 0 },
    },
    {
        name: 'Truly',
        adjectives: { 0: 0, 1: 0.1, 2: 0.1, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0.1, 10: 0, 11: 0.1, 12: 0.1, 13: 0.05, 14: 0 },
        adjectivesWithNoun: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0.1, 11: 0.05, 12: 0.1, 13: 0.05, 14: 0 },
    },
    {
        name: 'Very',
        adjectives: { 0: 0.1, 1: 0, 2: 0.1, 3: 0, 4: 0.1, 5: 0.1, 6: 0, 7: 0.1, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0.1, 13: 0.05, 14: 0 },
        adjectivesWithNoun: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0.1, 11: 0.05, 12: 0.1, 13: 0.05, 14: 0 },
    },
    {
        name: 'How',
        adjectives: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.05, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0.04, 11: 0.05, 12: 0.1, 13: 0.1, 14: 0.03 },
        adjectivesWithNoun: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0.1, 11: 0.05, 12: 0.1, 13: 0.05, 14: 0 },
    },
    {
        name: 'What a',
        adjectives: { },
        adjectivesWithNoun: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0.1, 11: 0.05, 12: 0.1, 13: 0.05, 14: 0 },
    },
    {
        name: 'What an',
        adjectives: { },
        adjectivesWithNoun: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0.1, 11: 0.05, 12: 0.1, 13: 0.05, 14: 0 },
    },
]

// Extras

const interjections = ['Wow! ', 'Wow, ', ''];
const exclamationMarkArray = ['', '!', '!!'];


/**
 * Main function for getting an item from a given category randomly, but based on probabilities
 * @param {Array} category 
 * @param {Object} probabilities 
 */
function getRandomItem(category, probabilities) {
    const randomItem = weightedRand(probabilities);
    item = category[randomItem()];
    return item;
}

/**
 * Main function for generating the comments
 */
function generateComment() {
    // Comment type
    const type = getRandomItem(types, typeProbabilities);

    // Comment entities
    let adjective, adverb, adverbAdjective, noun, adjectiveNoun;

    // Prefixes or Suffixes
    const interjection = getRandomItem(interjections, interjectionDefaultProbabilities);
    const exclamationMark = getRandomItem(exclamationMarkArray, exclamationMarkProbabilities);

    switch(type.name) {
        case 'Adjective':
            adjective = getRandomItem(adjectives, adjectiveDefaultProbabilities);
            return {
                text: `${interjection}${adjective.name}${exclamationMark}`,
                type: type.name
            }
        case 'Adjective + Noun': 
            adjective = getRandomItem(adjectives, adjectiveDefaultProbabilities);
            adjectiveNoun = getRandomItem(nouns, adjective.nouns);
            return {
                text: `${interjection}${adjective.name} ${adjectiveNoun}${exclamationMark}`,
                type: type.name
            }
        case 'Adverb + Adjective': 
            adverb = getRandomItem(adverbs, typeAAadverbProbabilities);
            adverbAdjective = getRandomItem(adjectives, adverb.adjectives);
            console.log(adverb, adverbAdjective);
            return {
                text: `${interjection}${adverb.name} ${adverbAdjective.name}${exclamationMark}`,
                type: type.name
            }
        case 'Adverb + Adjective + Noun': 
            adverb = getRandomItem(adverbs, adverbDefaultProbabilities);
            adverbAdjective = getRandomItem(adjectives, adverb.adjectivesWithNoun);
            adjectiveNoun = getRandomItem(nouns, adverbAdjective.nouns);
            console.log(adverb, adverbAdjective, adjectiveNoun);
            return {
                text: `${interjection}${adverb.name} ${adverbAdjective.name} ${adjectiveNoun}${exclamationMark}`,
                type: type.name
            }
        case 'Interjection':
            return {
                text: interjections[0],
                type: 'Interjection'
            }
        case 'Something about view or colors': 
            noun = getRandomItem(nouns, typeVCnounProbabilities);
            adverb = getRandomItem(adverbs, typeVCadverbProbabilities);
            adverbAdjective = getRandomItem(adjectives, adverb.adjectives);
            const isPlural = (noun === 'colors') ? true : false;
            return {
                text: `The ${noun} ${(isPlural) ? 'are' : 'is'} ${adverb.name.toLowerCase()} ${adverbAdjective.name}${exclamationMark}`,
                type: type.name
            }
        default:
            return 'Something went wrong. Try again.';
    }
}

// Trigger event and rendering results to the DOM
document.getElementById('generate-comment').onclick=function(){
    const comment = generateComment();
    console.log(comment.type);
    document.getElementById('comment-text').innerHTML = comment.text;
}