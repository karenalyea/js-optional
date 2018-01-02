(function(){
     sum(5,9);
    sum(5,4);
    avg(1, 5, 9);
    avg(4, 4, 4);
    avg(10, 4, 1);
    greaterThan(5, 6);
    greaterThan(4, 1);
    secondLargest([1, 4, 5, 8]);
    secondLargest([8, 3, 5, 1, 9, 10]);
    containsVowel('alpha');
    containsVowel('hmph');
    bonus(18.98);
    bonus(18.45);
    hamming("the first string", "the second string" );
    hamming("string1", "string2");
    multiples(5, 10);
    multiples(10, 50);

    // takes two parameters and returns the sum of those 2 numbers.
    function sum(firstNumber,secondNumber) {
        total = firstNumber + secondNumber;
        console.log(total);
        return total;

    }
    // takes 3 parameters and returns the average of those 3 numbers.
    function avg(firstNumber, secondNumber, thirdNumber) {
        total = (firstNumber + secondNumber + thirdNumber) / 3;
        console.log(total);
        return total;
    }
    // takes two parameters and returns true if the second parameter is greater than the first.Otherwise the function should return false

    function greaterThan(firstNumber, secondNumber) {
        if (firstNumber > secondNumber) {
            console.log("true " + firstNumber + " > " + secondNumber);
            return true;
        }
        console.log("false " + firstNumber + " is not greater than "+ secondNumber);
        return false;

    }
    // takes an array and returns the second largest number
    function secondLargest(secondLargestArray) {
        var largest = 0;
        var nextLargest = 0;
        secondLargestArray.forEach(function (item, index, array) {
            if (item > nextLargest) {
                nextLargest = largest;
                largest = item; 
            }
            
        })
        console.log("largest: " + largest + " next largest: " + nextLargest);

    }
    // takes a single string and 
    // returns true if there is at least one value or false otherwise.

    function containsVowel(vowel) {
        for (var i = 0; i < vowel.length; i = i + 1) {
            if ((vowel.substring(i, i + 1)) == ('a') ||
                (vowel.substring(i, i + 1)) == ('e') ||
                (vowel.substring(i, i + 1)) == ('i') ||
                (vowel.substring(i, i + 1)) == ('o') ||
                (vowel.substring(i, i + 1)) == ('u')) {
                    console.log("yes, contains vowel");
                    return true;
                }
                console.log("nope, no vowels here");
                return false;
            }    
                
    }
    // Jeb eats out at restaurants all the time but is horrible at math.He decides to write a function called bonus that accepts a single parameter(the cost of the meal), 
    // and should return the tip Jeb should give his waiter.Jeb uses two rules to calculate tips:
    // First he always tips 20 % on the original bill.
    // He then rounds up to the nearest dollar.For example, if the total with tip is $22.78, he'd round up to $23.00.

    function bonus(mealCost) {
        var plusTip = mealCost * 1.2;
        var roundTip = Math.ceil(plusTip);
        console.log("amount before rounding: " + plusTip + " amount after rounding: " + roundTip);
        return roundTip;
    }
    // accepts two strings. If the lengths of the strings are not equal, the function should return zero. 
    // Otherwise, return the number of letters that are in the same position in both words.
    function hamming(str1, str2) {
        var counter = 0;
        if (str1.length != str2.length) {
            console.log("strings are of unequal length");
            return 0;
        } else {
        for (var i = 0; i < str1.length; i = i + 1) {
            if ((str1.substring(i, i+1)) == (str2.substring(i, i+1))) {
                counter = counter + 1;
                
            }
        }
            console.log("number of matching characters is: " + counter);
            
        }
        return counter;
        
    }

    // accepts two numbers and returns an array of all numbers from 1 - 100 that are evenly divisible by both.
    function multiples(firstNumber, secondNumber) {
        var multiplesArray = [];
        for (var i = 1; i <= 100; i++) {
            if ((firstNumber % i == 0) && (secondNumber % 1 == 0)) {
                multiplesArray.push(i);
                console.log("first: " + firstNumber + " second: " + secondNumber);
            }
        }
        multiplesArray.forEach(function(item, index, array){
            console.log(item);
        })
    }
    
    $(function () {  

        })
})();