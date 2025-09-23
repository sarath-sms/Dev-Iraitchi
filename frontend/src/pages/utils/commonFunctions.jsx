export function testRegex(regex, str) {
    return regex.test(str);
  }

  export function removeFalsy(obj) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v)
    );
  }