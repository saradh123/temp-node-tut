// there is less need for setting up something locally ...right..s


const _ = require('lodash');

const items = [ 1, [ 2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)