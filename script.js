// quick fix for Cloud9 warning:
/* global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

$(document).ready(function() {

    // This function should return true if the input word starts with a vowel,
    // otherwise it should return false.
    var input = $("#input").val();
    var k = input.split();
    
    for(var u = 0; u < k.length; k=k+1){
        
    }
    function wordStartsWithVowel(word) {
    var t = word.charAt(0)
    if( t === "A" || t === "a" || t === "E" || t === "e" || t === "I"
    || t === "i" || t === "O" || t === "o" || t=== "U" || t === "u" 
    ){
       return true 
    }
    else{
       return false
    }
    }

    // Appends "yay" to the end of the word and returns the word.
    function appendYayToWord(word) {
        return word + "yay";
    }

    // Moves the first consonant to the end of the word, appends "ay" to the end of the word,
    // and returns the word.
    function convertWordWithConsonant(word) {
        return word.substring(1) + word.charAt(0) +"ay";
    }

    // If the word starts with a vowel, return the result of appendYayToWord.
    // Otherwise, return the result of convertWordWithConsonant.
    function convertWordToPigLatin(word) {

    }

    // Create a click handler that takes is triggered when the user clicks the translate button.
$("buttom").click(function(){

});
        // Gets a word from the input box
        // Transforms the word to pig latin
        // Displays the result on the screen in the output element
});



