
// let promise = fetch("https://jsonplaceholder.typicode.com/users/1");
 
// promise.then(response => {
//    console.log("Response received:", response);
//  });

// fetch("https://jsonplaceholder.typicode.com/users/1")
//    .then(response => response.json()) // parse JSON from response
//    .then(data => {
//      console.log(data.name);
//    });

// fetch("https://jsonplaceholder.typicode.com/users")
//    .then(res => res.json())
//    .then(users => {
//      users.forEach(user => {
//        console.log(`${user.name} (${user.email})`);
//      });
//    });


// run behind the scene - means running in the background
// console.log("Before fetch"); //run 1st
 
//  fetch("https://jsonplaceholder.typicode.com/posts/1") //run 3rd
//    .then(res => res.json())
//    .then(data => console.log("Fetched:", data));
 
// console.log("After fetch"); //run 2nd

//if there's asynchronous the must be synchronous
// fetch behave asynchronously
//synchronous means our program will execute  one by one and also it will wait for the rest to be done 1st.
// Need to have both ASYNC and AWAIT to make our code run one by one

//  async function waitForfetch(){
//     console.log("Before Fetch") // run 1st
//     let someData = await fetch("https://jsonplaceholder.typicode.com/posts/1") //run 2nd
//         .then(res => res.json())
//         .then(data => console.log("Fetched:", data));
//     console.log("After fetch"); //run 3rd
//  }

//  waitForfetch()
//  //await only allow for async function

 
// async function checkUser(id) {
//    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//    const user = await res.json();
   
//    if (user.name === "Leanne Graham") {
//      console.log("This is our VIP user.");
//    } else {
//      console.log("Standard user.");
//    }
// }
// checkUser(1)

//ERROR HANDLING

// async function getPost() {
//     // if u use await there's promise
//     // TRY catch - used to handle error
//     // TRY to execute soemthing
//     // If there is an error, CATCH it
//     // Throw means to throw it to catch immediately

//    let title = document.getElementById('title');
//    try { // this is how you start your try to catch block
//      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//      if (!res.ok) throw new Error("No such post!");
//      //console.log("Test") <== move this up and down to see any error/which line no working
//      const data = await res.json();

//      //DOM Access
//      
//      title.innerHTML = data.title
//      console.log(data);
//    } catch (err) {
//      // console.log (err.message)
//      title.innerHTML = err.message
//      console.error("Error fetching post:", err.message);
//    }
// }

// getPost()

 document.getElementById("getPostButton").addEventListener("click", async () => {
   const postId = document.getElementById("postIdInput").value;
   const output = document.getElementById("postTitle");
 
   output.textContent = "Loading...";
 
   try {
     const res = await fetch(
       `https://jsonplaceholder.typicode.com/posts/${postId}`
     );
 
     if (!res.ok) throw new Error("City not found");
 
     const data = await res.json();
     console.log(data)
     const { userId, title, body } = data;
 
     output.innerHTML = `
       <h3>User ID${userId}</h3>
       <h4>Title: ${title}°C</h4>
       <p>${body}</p>
      
     `;
   } catch (err) {
     output.textContent = err.message;
   }
});