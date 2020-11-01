const shuffle = (arr, n) => {
  let numsArr = [];
  let shuffledArr = [];
  while (numsArr.length < n) {
    let randomNum = Math.floor(Math.random() * n);
    if (!numsArr.includes(randomNum)) {
      numsArr.push(randomNum);
      shuffledArr.push(arr[randomNum]);
    }
  }
  return shuffledArr;
};

export default shuffle;
