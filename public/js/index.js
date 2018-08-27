const handleSuccess = () => {
  console.log('success!');
  let words = this.responseText;
  console.log(words);
  let wordsArray = words.split('\n');

  console.log(wordsArray);
};

const handleError = () => {
  console.log('fail!');
};

const request = new XMLHttpRequest();
request.onload = () => {
  const words = request.responseText;
  const wordsArray = words.split('\n');
  console.log(wordsArray);
};
request.open('GET', '/api');
request.send();
