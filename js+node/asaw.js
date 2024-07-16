
//Async/Await Syntax

async function fetchData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
              

//Error Handling in Asynchronous Code

async function getUserData(userId) {
  try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/todos/1${userId}`);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      let user = await response.json();
      return user;
  } catch (error) {
      console.error('Failed to fetch user data:', error);
      throw error; // Re-throw the error if you want to propagate it further
  }
}

(async () => {
  try {
      let user = await getUserData(1);
      console.log(user);
  } catch (error) {
      console.error('Handling in caller:', error);
  }
})();
