const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".container");

function displayError(message) {
  return `<div>${message}</div>`;
}

async function getGames() {
  try{
    const response = await fetch(url);

    const results = await response.json();

    const facts = results.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      console.log(facts[i].name);
      console.log(facts[i].rating);
      console.log(facts[i].tags.length);

      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div>${facts[i].name}</div>
                                    <div>Rating: ${facts[i].rating}</div>
                                    <div class="tags">Number of tags: ${facts[i].tags.length}</div>`;
      }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = displayError("An error occurred");

  }
}

getGames();
