/**
 * Generic function for randomly returning an item position in array, given the probabilities
 * @param {Object} spec - Object containing values that represent probability for
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
const typeProbabilities = { 0: 0.16, 1: 0.21, 2: 0.22, 3: 0.18, 4: 0.07, 5: 0.16 };

const adverbDefaultProbabilities = { 0: 0.15, 1: 0.10, 2: 0.15, 3: 0.10, 4: 0.10, 5: 0.05, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.05 };
const adjectiveDefaultProbabilities = { 0: 0.12, 1: 0.12, 2: 0.12, 3: 0.10, 4: 0.10, 5: 0.07, 6: 0.10, 7: 0.10, 8: 0.10, 9: 0.08, 10: 0, 11: 0.10, 12: 0.10, 13: 0.10, 14: 0.10 };
const nounDefaultProbabilities = { 0: 0.14, 1: 0.1, 2: 0.14, 3: 0.06, 4: 0.1, 5: 0.06, 6: 0.1, 7: 0.1, 8: 0.14, 9: 0.06 };

const interjectionDefaultProbabilities = { 0: 0.04, 1: 0.03, 2: 0.93 };
const exclamationMarkProbabilities = { 0: 0.25, 1: 0.55, 2: 0.2 };

// Type specific Probabilities 
const type2adverbProbabilities = { 0: 0.3, 1: 0, 2: 0, 3: 0, 4: 0.20, 5: 0.15, 6: 0.15, 7: 0.20, 8: 0, 9: 0 };
const type4adverbProbabilities = { 0: 0, 1: 0.12, 2: 0.17, 3: 0.04, 4: 0.1, 5: 0.06, 6: 0.08, 7: 0, 8: 0.17, 9: 0.12 };
const type6adverbProbabilities = { 0: 0.4, 1: 0, 2: 0, 3: 0, 4: 0.24, 5: 0.18, 6: 0.18, 7: 0, 8: 0, 9: 0 };
const type6nounProbabilities = { 0: 0.5, 1: 0, 2: 0.5, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };


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
        following: type2adverbProbabilities
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
        following: type6nounProbabilities
    }
]

// Main Comment Entities
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
        type4adjectives: { },
        type4nouns: { }
    },
    {
        name: 'Such',
        adjectives: { },
        type4adjectives: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0, 11: 0, 12: 0.1, 13: 0.1, 14: 0.1 },
        type4nouns: { 0: 0, 1: 0, 2: 0.1, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }
    },
    {
        name: 'Such a',
        adjectives: { },
        type4adjectives: { 0: 0.1, 1: 0, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0, 11: 0.05, 12: 0, 13: 0.1, 14: 0.1 },
        type4nouns: { 0: 0.1, 1: 0.1, 2: 0, 3: 0.05, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05 }
    },
    {
        name: 'Such an',
        adjectives: { },
        type4adjectives: { 0: 0, 1: 0.1, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0.1, 13: 0, 14: 0 },
        type4nouns: { 0: 0.1, 1: 0.1, 2: 0, 3: 0.05, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05 }
    },
    {
        name: 'Really',
        adjectives: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.05, 5: 0.1, 6: 0.05, 7: 0.1, 8: 0.05, 9: 0.05, 10: 0.1, 11: 0.05, 12: 0.1, 13: 0.05, 14: 0.1 },
        type4adjectives: { 0: 0.1, 1: 0.04, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0.03, 11: 0.05, 12: 0.1, 13: 0.05, 14: 0.1 },
        type4nouns: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.05, 4: 0.1, 5: 0.1, 6: 0.05, 7: 0.1, 8: 0.1, 9: 0.05 }
    },
    {
        name: 'Truly',
        adjectives: { 0: 0, 1: 0.1, 2: 0.1, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0.1, 10: 0, 11: 0.1, 12: 0.1, 13: 0.05, 14: 0 },
        type4adjectives: { 0: 0.1, 1: 0.04, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0.03, 11: 0.05, 12: 0.1, 13: 0.05, 14: 0.1 },
        type4nouns: nounDefaultProbabilities
    },
    {
        name: 'Very',
        adjectives: { 0: 0.1, 1: 0, 2: 0.1, 3: 0, 4: 0.1, 5: 0.1, 6: 0, 7: 0.1, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0.1, 13: 0.05, 14: 0 },
        type4adjectives: { 0: 0.1, 1: 0, 2: 0.1, 3: 0, 4: 0, 5: 0.1, 6: 0, 7: 0.03, 8: 0.1, 9: 0, 10: 0, 11: 0, 12: 0.1, 13: 0, 14: 0 },
        type4nouns: nounDefaultProbabilities
    },
    {
        name: 'How',
        adjectives: { 0: 0.1, 1: 0.1, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.05, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0.04, 11: 0.05, 12: 0.1, 13: 0.1, 14: 0.03 },
        type4adjectives: { },
        type4nouns: { }
    },
    {
        name: 'What a',
        adjectives: { },
        type4adjectives: { 0: 0.1, 1: 0, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05, 10: 0, 11: 0.05, 12: 0, 13: 0.1, 14: 0.1 },
        type4nouns: { 0: 0.1, 1: 0.1, 2: 0, 3: 0.05, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05 }
    },
    {
        name: 'What an',
        adjectives: { },
        type4adjectives: { 0: 0, 1: 0.1, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0.1, 13: 0, 14: 0 },
        type4nouns: { 0: 0.1, 1: 0.1, 2: 0, 3: 0.05, 4: 0.1, 5: 0.1, 6: 0.1, 7: 0.1, 8: 0.1, 9: 0.05 }
    },
]
const nouns = ['view', 'photo', 'colors', 'pic', 'picture', 'scenery', 'spot', 'landscape', 'shot', 'frame'];

// Extras
const interjections = ['Wow! ', 'Wow, ', ''];
const exclamationMarkArray = ['', '!', '!!'];
const textTransform = [false, true];


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
    let output, text, lowerCaseProbabilities;

    // Prefixes and Suffixes
    const interjection = getRandomItem(interjections, interjectionDefaultProbabilities);
    const exclamationMark = getRandomItem(exclamationMarkArray, exclamationMarkProbabilities);

    // In case that "Wow, " comes up, the following code will return the whole sentence as lower case. 
    let needsLowerCase;
    (interjection === interjections[1]) ? needsLowerCase = true : needsLowerCase = false;

    // If no special case is triggered, randomly choose lower case or not, else force lower case
    (!needsLowerCase) ? lowerCaseProbabilities = { 0: 0.05, 1: 0.05 } : lowerCaseProbabilities = { 0: 0, 1: 1 };

    // Randomly choose if the sentence will be lower case or not
    const lowerCase = getRandomItem(textTransform, lowerCaseProbabilities);

    switch(type.name) {

        case 'Adjective':

            // Randomly get words according to pattern
            adjective = getRandomItem(adjectives, adjectiveDefaultProbabilities);
            // Defines the output and if lower case will be applied or not
            output = `${interjection}${adjective.name}${exclamationMark}`;
            (lowerCase) ? text = output.toLowerCase() : text = output;

            return {
                text,
                type: type.name
            }

        case 'Adjective + Noun': 

            // Randomly get words according to pattern
            adjective = getRandomItem(adjectives, adjectiveDefaultProbabilities);
            adjectiveNoun = getRandomItem(nouns, adjective.nouns);
            // Defines the output and if lower case will be applied or not
            output = `${interjection}${adjective.name} ${adjectiveNoun}${exclamationMark}`;
            (lowerCase) ? text = output.toLowerCase() : text = output;

            return {
                text,
                type: type.name
            }

        case 'Adverb + Adjective': 
        
            // Randomly get words according to pattern
            adverb = getRandomItem(adverbs, type2adverbProbabilities);
            adverbAdjective = getRandomItem(adjectives, adverb.adjectives);
            // Defines the output and if lower case will be applied or not
            output = `${interjection}${adverb.name} ${adverbAdjective.name}${exclamationMark}`;
            (lowerCase) ? text = output.toLowerCase() : text = output;

            return {
                text,
                type: type.name
            }

        case 'Adverb + Adjective + Noun': 

            // Randomly get words according to pattern
            adverb = getRandomItem(adverbs, type4adverbProbabilities);
            adverbAdjective = getRandomItem(adjectives, adverb.type4adjectives);
            adjectiveNoun = getRandomItem(nouns, adverb.type4nouns);
            // Defines the output and if lower case will be applied or not
            output = `${interjection}${adverb.name} ${adverbAdjective.name} ${adjectiveNoun}${exclamationMark}`;
            (lowerCase) ? text = output.toLowerCase() : text = output;

            return {
                text,
                type: type.name
            }

        case 'Interjection':

            return {
                text: interjections[0],
                type: 'Interjection'
            }

        case 'Something about view or colors': 
            // Randomly get words according to pattern
            noun = getRandomItem(nouns, type6nounProbabilities);
            adverb = getRandomItem(adverbs, type6adverbProbabilities);
            adverbAdjective = getRandomItem(adjectives, adverb.adjectives);
            // Detects plural form. Defines the use of words in the output
            const isPlural = (noun === 'colors') ? true : false;
            // Defines the output and if lower case will be applied or not
            output = `The ${noun} ${(isPlural) ? 'are' : 'is'} ${adverb.name.toLowerCase()} ${adverbAdjective.name}${exclamationMark}`;
            (lowerCase) ? text = output.toLowerCase() : text = output;

            return {
                text,
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