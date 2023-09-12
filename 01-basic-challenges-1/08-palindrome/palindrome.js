function isPalindrome(str) {
  const formatted = removeAlphaNumeric(str.toLowerCase());
  const reversed = reversedString(formatted);
  if (formatted === reversed) {
    return true;
  }
  return false;
}

function removeAlphaNumeric(str) {
  let formatted = "";
  for (let i = 0; i < str.length; i++) {
    if (isAlphaNumeric(str[i])) {
      //removed spl char and spaces
      formatted += str[i];
    }
  }

  return formatted;
}

function isAlphaNumeric(char) {
  const charCode = char.charCodeAt(0);

  if (
    (charCode >= 48 && charCode <= 57) ||
    (charCode >= 97 && charCode <= 122)
  ) {
    return true;
  }
  return false;
}
function reversedString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}

module.exports = isPalindrome;
