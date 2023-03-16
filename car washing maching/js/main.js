// fixing the links of the services section in the nav bar
// let theNavSystemLinks = document.querySelectorAll(".sub-links li")

// theNavSystemLinks.forEach((item) => {
//    item.addEventListener("click", (e) => {
      
//       const theSelectedSystemContainer = document.querySelector("." + item.dataset.select);

//       console.log(theSelectedSystemContainer);

//       theSystemContainer.forEach((container) => {

//          container.classList.remove("active")
//      })
//      theSelectedSystemContainer.classList.add("active")
//    })
// })

// the services section 
let theNavSystemLinks = document.querySelectorAll(".sub-links li")


theNavSystemLinks.forEach((item) => {
   
   item.addEventListener("click", (e) => {
      
      let theSelectedSystemContainer = document.querySelector("." + item.dataset.select);

      console.log("hi");
      theSystemContainer.forEach((container) => {
         
         container.classList.remove("active")
     })
     theSelectedSystemContainer.classList.add("active")
   })
})
let systemlinks = document.querySelectorAll(".system-titles li ");

    
 systemlinks.forEach((item) => {
      
      item.addEventListener("click", (e) => {

         let theSelectedSystemContainer = document.querySelector("." + item.dataset.select);

         let theSystemContainer = document.querySelectorAll(".system-detailes");

         item.classList.add("active");

         theSystemContainer.forEach((container) => {

          container.classList.remove("active");

        });

         theSelectedSystemContainer.classList.add("active")

      });
 });




   
    
