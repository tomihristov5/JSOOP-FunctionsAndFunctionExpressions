// Task 1
// Write a function that sums an array of numbers:
// numbers must be always of type Number
// returns `null` if the array is empty
// throws Error if the parameter is not passed (undefined)
// throws if any of the elements is not convertible to Number	

function sum(arr) {
    if (arr === undefined) {
        throw new Error('Enter an array!');
    } else if (!arr.length) {
        return null;
    } else {
        if (!arr.every(function (item) {
                return !isNaN(item);
        })) {
            throw new Error('All elements must be convertible to numbers.');
        }
    }

    return arr.reduce(function (result, item) {
        return result + +item;
    }, 0);
}
