async function lowerCaseWords(array){
  if (!Array.isArray(array)){
    throw new Error("Error! The given input should be an array");
  }
    const lowerCasedArray = array
    .filter((item) => typeof item === 'string')
    .map(word => word.toLowerCase());

    return lowerCasedArray;
}

const mixedArray = ['PIZZA', 10, true, 25, false,'wings']

lowerCaseWords(mixedArray)
    .then((lowerCasedArray) => console.log(lowerCasedArray))
    .catch((err) => console.error("An error occured: " + err.message));