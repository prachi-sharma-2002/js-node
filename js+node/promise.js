

//Creating a Promise

const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
      const success = true; // Change to false to test rejection
      if (success) {
          resolve('Operation was successful!');
      } else {
          reject('Operation failed.');
      }
  }, 2000);
});


//Handling a Promise
myPromise
    .then(result => {
        console.log(result); // 'Operation was successful!'
    })
    .catch(error => {
        console.error(error); // 'Operation failed.'
    });


    //Chaining Promises

    const fetchData = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve({ id: 1, name: 'prachi' });
      }, 1000);
  });
  
  fetchData
      .then(data => {
          console.log('Data fetched:', data);
          return new Promise((resolve, reject) => {
              setTimeout(() => {
                  data.age = 30;
                  resolve(data);
              }, 1000);
          });
      })
      .then(updatedData => {
          console.log('Data updated:', updatedData);
      })
      .catch(error => {
          console.error('Error:', error);
      });


      //Creating and Handling a Promise

      function simulateAsyncOperation(success) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (success) {
                    resolve('Operation completed successfully.');
                } else {
                    reject('Operation failed.');
                }
            }, 2000);
        });
    }
    
    simulateAsyncOperation(true)
        .then(message => {
            console.log(message); // 'Operation completed successfully.'
        })
        .catch(error => {
            console.error(error); // 'Operation failed.'
        });
    
    simulateAsyncOperation(false)
        .then(message => {
            console.log(message);
        })
        .catch(error => {
            console.error(error); // 'Operation failed.'
        });
    
  
      //Chaining Promises
      function fetchDat() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ id: 1, name: 'Abhi' });
            }, 1000);
        });
    }
    
    fetchDat()
        .then(data => {
            console.log('Data fetched:', data);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    data.age = 25;
                    resolve(data);
                }, 1000);
            });
        })
        .then(updatedData => {
            console.log('Data updated:', updatedData); 
        })
        .catch(error => {
            console.error('Error:', error);
        });
    

