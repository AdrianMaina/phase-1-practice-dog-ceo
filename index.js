document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageContainer = document.getElementById('dog-image-container');
    const breedUl = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');
    let allBreeds = [];
  
    // Challenge 1: Fetch and display dog images
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          img.alt = "A cute dog";
          dogImageContainer.appendChild(img);
        });
      })
      .catch(error => console.error("Error fetching dog images:", error));
  
    // Challenge 2: Fetch and display all dog breeds
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        // data.message is an object where keys are breed names.
        allBreeds = Object.keys(data.message);
        renderBreeds(allBreeds);
      })
      .catch(error => console.error("Error fetching dog breeds:", error));
  
    // Function to render breeds in the <ul>
    function renderBreeds(breeds) {
      // Clear any previous list
      breedUl.innerHTML = '';
      breeds.forEach(breed => {
        const li = document.createElement('li');
        li.textContent = breed;
        // Challenge 3: Change font color on click
        li.addEventListener('click', () => {
          li.style.color = "red"; // you can choose any color
        });
        breedUl.appendChild(li);
      });
    }
  
    // Challenge 4: Filter the list of breeds based on dropdown selection
    breedDropdown.addEventListener('change', (event) => {
      const selectedLetter = event.target.value;
      const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
      renderBreeds(filteredBreeds);
    });
  });
  