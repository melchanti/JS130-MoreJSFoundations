function startCounting() {
  let counter = 0;
  let id = setInterval(() => {
    counter += 1;
    console.log(counter)
  }, 1000);

  return id;
}

function stopCounting(id) {
  clearInterval(id);
}

let id = startCounting();
setTimeout(() => stopCounting(id), 5000);