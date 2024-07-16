function fetchData(callback) {
  console.log('Fetching data...');

  setTimeout(() => {
    const data = { name: 'Anu', age: 25 };
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log('Data received:', data);
}

fetchData(processData);









function fetchData(callback) {
  console.log('Fetching data...');

  setTimeout(() => {
    const error = null; // or an Error object if something goes wrong
    const data = { name: 'Anu', age: 25 };

    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  }, 2000);
}

function processData(error, data) {
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Data received:', data);
  }
}

fetchData(processData);







function step1(callback) {
  setTimeout(() => {
    console.log('Step 1 complete');
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log('Step 2 complete');
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log('Step 3 complete');
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log('All steps complete');
    });
  });
});

