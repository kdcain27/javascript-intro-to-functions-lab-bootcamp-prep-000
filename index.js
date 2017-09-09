function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log("HELLO")
}

function logWhisper(string) {
  console.log("hello")
}

var uppercase = "HELLO"

uppercase.toUpperCase() === uppercase // true

var lowercase = "hello"

lowercase.toLowerCase() === lowercase // true

var love = "I love you, Grandma."

function sayHiToGandma(string) {
  if (string.toLowerCase) {
    return "I can't hear you!"}
  if (string.toUpperCase) {
    return "YES INDEED!"}
  else if (love){
    return "I love you, too."}

  }
