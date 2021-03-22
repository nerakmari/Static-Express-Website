fetch('/api/v0/gallery')
  .then(function(response){
    if(!response.ok) {
      throw new Error('Not OK');
    }
    return response.json();

  })
  .then(function(data){

    const imageGallery = document.querySelector('#gallery');

    let output= '';
  
    //Basically the same for what I have for the assignment 2
    steps.forEach(function(images){

      // used gallery HTML to achieve output of images, title, description and width. Did not insert credits as it is all the same for each image and is done through HTML instead
      output += `<h2>${images.title}</h2>
      <figure class="image-item">
      <img src="${images.pathURL}" alt="${images.title}" width="${images.width} height="${images.height}"/>
      <figcaption>${images.description}</figcaption>
      </figure>`;
    
    });  
    
    //for it to show up in the browser
    images.innerHTML = output; 
  });

  .catch(function(err){
    console.log(err);
  });

