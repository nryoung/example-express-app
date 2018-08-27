const request = new XMLHttpRequest();
request.onload = () => {
  const words = request.responseText;
  const wordsArray = words.split('\n');
  console.log(wordsArray);
};
request.open('GET', '/api');
request.send();
