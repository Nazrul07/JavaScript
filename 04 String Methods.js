let str = " Hello, World..! "

// Crucial Rule in JavaScript: JavaScript strings are primitives and strictly IMMUTABLE.
// None of the string methods modify the original string in place. Every method returns a new string.


//  Character Access & Modern Indexing (at() vs charAt())
const word = "JavaScript";

// Traditional:
console.log(word.charAt(0));     // "J"
console.log(word[0]);            // "J"

// Modern (ES2022) with negative index:
console.log(word.at(-1));        // "t" (last character)
console.log(word.at(-2));        // "p" (second last character)


// Avoid legacy indexOf() !== -1 when checking for existence.
// Modern code uses clean, expressive methods:

const email = "developer@gmail.com";

// includes(seachString, position?)          -> checks if a string contains another string
console.log(email.includes("@"));           // true
console.log(email.includes("gmail"));       // true
console.log(email.includes("org"));         // false

// startsWith(searchString, position?)       -> checks if a string starts with another string
// Optional 'position' parameter: Index where the search should begin (inclusive).
// If provided, it effectively searches within the substring starting from that position.
console.log(email.startsWith("dev"));       // true
console.log(email.startsWith("mail", 8));   // false -> How? At index 8 it will start searching the string "mail", but at index 8 it is r, then 9th index it is @.

// endsWith(searchString, length?)          -> checks if a string ends with another string
// Optional 'length' parameter: The length of the string to consider for the search.
// If provided, the search is performed on the substring from the beginning up to this length (exclusive).
console.log(email.endsWith("com"));         // true
console.log(email.endsWith("@", 8));        // false -> The second argument, 8, tells JavaScript to consider only the first 8 characters of the string when checking whether it ends with "@".
// "develope".endsWith("@");                // false




// JavaScript has slice(), substring(), and the deprecated substr().
// In industry code, always default to slice() because it consistently handles negative indices.

const message = "FullStack Web Development";

// slice(startIndex, endIndexExclusive)
console.log(message.slice(0, 9));       // "FullStack"
console.log(message.slice(9));          // " Web Development"

// Negative indexing: counts from the end. -> last one index is -1.
console.log(message.slice(-9));         // "velopment" 
console.log(message.slice(0, -11));     // "FullStack Web "

// substring(startIndex, endIndexExclusive)
console.log(message.substring(0, 9));   // "FullStack"
console.log(message.substring(9));      // " Web Development"
console.log(message.substring(-9));     // "FullStack Web Development" -> It treats the negative index as 0.
console.log(message.substring(-11, 9)); // "FullStack" -> It treats the negative index as 0.




//  ****Sanitization & Padding****
// Crucial when handling user input or formatting numbers/currencies

const rawInput = "   nazrul.dev@gmail.com ";
const cleanEmail = rawInput.trim();     // removes whitespace from both ends of a string.
console.log(cleanEmail);                // "nazrul.dev@gmail.com"

const TrimStart = rawInput.trimStart(); // Removes whitespace from the beginning of a string.
console.log(TrimStart);

const TrimEnd = rawInput.trimEnd();     // Remove whitespace from the end of a string.
console.log(TrimEnd);



// **** Padding Methods ****
// Padding: padStart(targetLength, padString)
const lastFourDigits = "4321";
const markedCard = lastFourDigits.padStart(16, "*");
console.log(markedCard);                // ************4321

// Padding: padEnd(targetLength, padString)
const invoiceNumber = "43";
const formattedNumber = invoiceNumber.padEnd(8, "0");
console.log(formattedNumber);           // 43000000




// **** Replacement ****
// Before ES2021, replacing all occurrences required regular expressions (/pattern/g).
// Now we have replaceAll()

const sentence = "cats and dogs and cats";

// replace() only replaces the first occurrence.
console.log(sentence.replace("cats", "birds"));
// output: "birds and dogs and cats"

// replaceAll() replaces all occurrences of a substring.
console.log(sentence.replaceAll("cats", "birds"));
// output: "birds and dogs and birds"




// **** Splitting & Joining ***
const tags = "react,nextjs,javascript,nodejs";
const tagArray = tags.split(",");
console.log(tagArray);

// Resersing a string clearnly:
// String is immutable, so we can't reverse it directly.
// We need to convert it to an array, reverse it, and then join it back to a string.
const reversed = "hello".split("").reverse().join("");
console.log(reversed);

// .split("") — String → Array         ->     "hello" → ["h", "e", "l", "l", "o"]
// ["h", "e", "l", "l", "o"].reverse() ->     ["o", "l", "l", "e", "h"]
// .join("") — Array                   -> String ->  ["o", "l", "l", "e", "h"] → "olleh"
