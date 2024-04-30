function getRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        if (data && data.status === "success" && data.message) {
          displayDogImage(data.message);
        }

            })
      .catch(error => {
        console.error('Error fetching dog image:', error);
      });
  }
  
  function displayDogImage(imageUrl) {
    const dogImageContainer = document.getElementById('dogImageContainer');
    dogImageContainer.innerHTML = `
    <div class="imgbox"><img src="${imageUrl}" alt="Random Dog Image"> </div>`;
  }

