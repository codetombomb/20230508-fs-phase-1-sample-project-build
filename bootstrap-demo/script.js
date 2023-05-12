

{/* <div class="card float-start" style="width: 18rem">
<img src="https://cataas.com/cat" class="card-img-top" alt="..." />
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */}

const names = ["Buzz", "Woody", "Bo Peep"]

names.forEach(name => {
    const card = document.createElement("div")
    // card.className = "card float-start"

    card.classList.add("card", "float-start")

    console.log(card)

    

    const cardImg = document.createElement("img")
    cardImg.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pixar.com%2Ffeature-films%2Ftoy-story-2&psig=AOvVaw26nB6JNJYZfFzsIxpJF8bF&ust=1683997694271000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDRsrSi8P4CFQAAAAAdAAAAABAE"



});






