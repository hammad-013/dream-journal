let dreamsData;

function retrieveData() {
  if (localStorage.getItem("dreams") == null) {
    dreamsData = [];
  }
  else {
    dreamsData = JSON.parse(localStorage.getItem("dreams"));
  }
}

function saveData() {
  localStorage.setItem("dreams", JSON.stringify(dreamsData));
}

function addDream() {
  let Dtitle = document.getElementById("title");
  let Ddescription = document.getElementById("description");
  let Dtheme = document.getElementById("theme");
  let Dweather = document.getElementById("weather");
  let Demotion = document.getElementById("emotion");
  let Dcolor = document.getElementById("color");
  let Ddate = document.getElementById("date");
  let Drating = document.getElementById("rating");

  let dream = {
    title: Dtitle.value,
    description: Ddescription.value,
    theme: Dtheme.value,
    weather: Dweather.value,
    emotion: Demotion.value,
    color: Dcolor.value,
    date: Ddate.value,
    rating: Drating.value
  };
  dreamsData.push(dream);
  saveData();
  displayDream();

}


function displayDream() {
  document.getElementById("dreams-list").innerHTML = ``;
  dreamsData.forEach((dream) => {
    let card = document.createElement("div");
    card.className = "card";
    
    card.innerHTML = `
      <h1>${dream.title}</h1>
      <hr>
      <p><strong>Date:</strong> ${dream.date}</p>
      <p><strong>Theme:</strong> ${dream.theme}</p>
      <p><strong>Description:</strong> ${dream.description}</p>
      <p><strong>Emotion:</strong> ${dream.emotion}</p>
      <p><strong>Weather:</strong> ${dream.weather}</p>
      <span style="display: flex; align-items:center;"><strong>Color Resembling Dream:</strong> <div class="color-box" style="width: 20px; height: 20px; display: inline-block; margin-left:20px; background-color: ${dream.color};"></div></span>
      <p><strong>Vividness Rating:</strong> ${dream.rating}/100</p>
      
    `;
    document.getElementById("dreams-list").appendChild(card);
    document.getElementById("title").value = ``;
    document.getElementById("description").value = ``;
    document.getElementById("theme").value = ``;
    document.getElementById("weather").value = ``;
    document.getElementById("emotion").value = ``;
    document.getElementById("color").value = `#000000`;
    document.getElementById("rating").value = `0`;
  })
}
function deleteLastDream() {
  alert(`Deleted Dream With Title "${dreamsData[(dreamsData.length - 1)].title}"`);
  dreamsData.pop();
  displayDream(); 
}
function deleteFirstDream() {
  alert(`Deleted Dream With Title "${dreamsData[0].title}"`);
  dreamsData.shift();
  displayDream();
  
}

retrieveData();
displayDream();
