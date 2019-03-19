function palindromeChecker(str) {

  function formatString(inputString) {
    let regex = /[_\W\s]/gi;
    return inputString.replace(regex, '').toLowerCase();
  }

  function reverseString(formattedString) {
    return formattedString.split('').reverse().join('');
  }

  function checkIfPalindrome(formattedStr, formattedStrReverse) {
    if (formattedStr === formattedStrReverse) {
      return true;
    } else {
      return false;
    }
  }

  let inputString = str;
  let formattedString = formatString(inputString);
  let reversedString = reverseString(formattedString);

  return checkIfPalindrome(formattedString, reversedString);
}

palindromeChecker('race car');

