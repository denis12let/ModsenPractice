const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5',
];

const fetchData = (urls) => {
  const requests = urls.map((url) => fetch(url));

  return Promise.all(requests);
};

fetchData(urls).then((responses) => {
  responses.forEach((response) => console.log(response.url, response, '\n'));
});
