function removeExclamationMarks(s) {
    let newS = s.split('!').join('')
  return newS
}

console.log(removeExclamationMarks('Hello there!!'))