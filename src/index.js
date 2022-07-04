
// fetch("http://localhost:3000/images")
// .then (Response) => Response.json()
// .then ((data) => {
//   for (let image of data) {
//     createImageCard(image);
//   }
// });





function createImageCard(image) {
    let section = document.querySelector(".image-container");
  
    let article = document.createElement("article");
    article.className = "image-card";
  
    let h2 = document.createElement("h2");
    h2.className = "title";
    h2.textContent = image.title;
  
    let img = document.createElement("img");
    img.src = image.image;
    img.className = "image";
  
    let div = document.createElement("div");
    div.className = "likes-section";
  
    let span = document.createElement("span");
    span.className = "likes";
    span.textContent = image.likes + " likes";
  
    let button = document.createElement("button");
    button.className = "like-button";
    button.textContent = "♥";
  
    let ul = document.createElement("ul");
  
    for (let comment of image.comments) {
      let li = document.createElement("li");
      li.textContent = comment.content;
  
      ul.append(li);
    }
  
    div.append(span, button);
    article.append(h2, img, div, ul);
    section?.append(article);
  }
