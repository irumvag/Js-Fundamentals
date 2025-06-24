# HOW TO USE THIS REPO AND WHAT CONTAIN IN THIS REPO

***

To run JavaScript code you need to have IDE that can run JavaScript especial node or browser console.

***

## 1 The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

### Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples

        ```bash
        " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
        "    Hello     World   "                  =>  "#HelloWorld"
        ""                                        =>  false
        ```

## How to Run

Use Node.js:

```bash
node generateHashtag.js
```
---

## 2 Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); -> igPay atinlay siay oolcay

pigIt('Hello world !');     ->  elloHay orldway !

### How to run code

use Node.js:

```bash
node filename.js
```
---

### Remove First and Last Character
Task
Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.

Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

Examples

```bash
removeChar('eloquent') // -> 'loquen'
removeChar('country')  // -> 'ountr' 
removeChar('person')   // -> 'erso'
removeChar('ab')       // -> '' (empty string)
removeChar('xyz')      // -> 'y'
Function Signature
function removeChar(str) {
  // Your code here
}
```
#### Requirements
The input string will always have at least 2 characters
For strings with exactly 2 characters, return an empty string
For strings with 3 or more characters, remove the first and last character
The function should handle strings containing letters, numbers, and special characters
Test Cases
Your solution will be tested against:

Basic functionality with common words
Edge cases with 2-character and 3-character strings
Strings containing numbers and special characters
Random test cases of varying lengths

---