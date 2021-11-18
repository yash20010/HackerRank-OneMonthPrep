// The string contains all letters in the English alphabet, so return pangram.

// Function Description

// Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. Otherwise, it should return not pangram.

// pangrams has the following parameter(s):

// string s: a string to test
// Returns

// string: either pangram or not pangram
// Input Format

// A single line with string .

// Constraints

// Each character of ,

// Sample Input

// Sample Input 0

// We promptly judged antique ivory buckles for the next prize

// Sample Output 0

// pangram

// Sample Explanation 0

// All of the letters of the alphabet are present in the string.

// Sample Input 1

// We promptly judged antique ivory buckles for the prize

// Sample Output 1

// not pangram

// Sample Explanation 0

// The string lacks an x.

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
  // Write your code here
  s = s.toLowerCase()
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < alphabet.length; i++) {
    if (s.indexOf(alphabet[i]) === -1) {
      return 'not pangram'
    }
  }
  return 'pangram'

  //   let arr = new Array(26).fill(0)

  //   for (let i = 0; i < s.length; i++) {
  //     let index = alphabet.indexOf(s[i])
  //     if (index != -1) {
  //       arr[index]++
  //     }
  //   }
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === 0) {
  //       return 'not pangram'
  //     }
  //   }
  //   return 'pangram'
}
