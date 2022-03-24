let word = 'hello'

let newWord = word[0].toUpperCase()

console.log(newWord)

function camelize(word) { 
    let wordArray = word.split('-')

    for(i = 1; i < wordArray.length; i++){
        let newArr = wordArray[i].split('')
        newArr[0] = newArr[0].toUpperCase()
        wordArray[i] = newArr.join('')
    }

    
    return wordArray.join('')
}

console.log(camelize('-hey-there'))

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');



function sortDecreasing(arr){
    return arr.sort((a, b) => b - a)
}

let arr = [5, 2, 1, -10, 8];

console.log(sortDecreasing(arr))


function filterRangeInPlace(arr, n1, n2) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < n1 || arr[i] > n2){
            arr.splice(i, 1)
        }
    }
}

arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4)
alert( arr );