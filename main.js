function updateSliderValue(sliderId, valueId) {
    const slider = document.getElementById(sliderId);
    const valueDisplay = document.getElementById(valueId);
    slider.addEventListener("input", () => {
      valueDisplay.textContent = slider.value;
    });
  }

  updateSliderValue("adventurous", "adventurousValue");
  updateSliderValue("optimistic", "optimisticValue");
  updateSliderValue("creative", "creativeValue");
  updateSliderValue("responsible", "responsibleValue");
  updateSliderValue("emotional", "emotionalValue");

function recommendFlower() {
    const adventurous = parseInt(document.getElementById("adventurous").value);
    const optimistic = parseInt(document.getElementById("optimistic").value);
    const creative = parseInt(document.getElementById("creative").value);
    const responsible = parseInt(document.getElementById("responsible").value);
    const emotional = parseInt(document.getElementById("emotional").value);

    let flower = "";
    let image = "";
    let altText = "";
    let description = "";

    const flowers = [
        {
          name: "Peony",
          image: "images/peony.jpg",
          altText: "A bouquet of pink peonies in a glass vase.",
          description: "Peonies are known to symbolize romance, prosperity, and good fortune. They have short life spans, but they make the most of the moment, bringing a happy energy perfect for celebrating those good moments. This flower is perfect for those who live their life with a smile and spontaneously.",
          adventurousWeight: 4, 
          optimisticWeight: 3,    
          creativeWeight: 2,
          responsibleWeight: 1,
          emotionalWeight: 3     
        },
        {
          name: "Iris",
          image: "images/iris.jpg",
          altText: "A bouquet of bright purple irises in a glass vase.",
          adventurousWeight: 2,
          optimisticWeight: 4,
          creativeWeight: 3,
          responsibleWeight: 2,
          emotionalWeight: 1
        },
        {
          name: "Tulips",
          image: "images/tulip.webp",
          altText: "A bouquet of bright pink tulips wrapped in pink paper.",
          adventurousWeight: 1,
          optimisticWeight: 3,
          creativeWeight: 4,
          responsibleWeight: 1,
          emotionalWeight: 2
        },
        {
          name: "Daisies",
          image: "images/daisy.avif",
          altText: "A bouquet of white daisies wrapped in brown bow.",
          adventurousWeight: 1,
          optimisticWeight: 3,
          creativeWeight: 2,
          responsibleWeight: 2,
          emotionalWeight: 4
        },
        {
          name: "Hydrangea",
          image: "images/hydrangea.webp",
          altText: "A bouquet of light blue hydrangeas in a glass vase.",
          adventurousWeight: 2,
          optimisticWeight: 2,
          creativeWeight: 1,
          responsibleWeight: 4,
          emotionalWeight: 3
        },
        {
          name: "Magnolia",
          image: "images/magnolia.webp",
          altText: "A bouqet of white magnolia flowers.",
          adventurousWeight: 3,
          optimisticWeight: 2,
          creativeWeight: 1,
          responsibleWeight: 3,
          emotionalWeight: 1
        },
        {
            name: "Rose",
            image: "images/rose.avif",
            altText: "A bouqet of red roses flowers",

            adventurousWeight: 1,
            optimisticWeight: 2,
            creativeWeight: 1,
            responsibleWeight: 2,
            emotionalWeight: 3
          }
      ];

     
      let bestFlower = flowers[6];
      let highestScore = 0;

      flowers.forEach(flower => {
        const score =
          (flower.adventurousWeight * adventurous) +
          (flower.optimisticWeight * optimistic) +
          (flower.creativeWeight * creative)+
          (flower.responsibleWeight * responsible) +
          (flower.emotionalWeight * emotional);

        if (score > highestScore) {
          highestScore = score;
          bestFlower = flower;
        }
      });

      // Display the result
      const resultDiv = document.getElementById("flowerRecommendation");
      resultDiv.innerHTML = `
        <h3>Your Flower: ${bestFlower.name}</h3>
        <img src="${bestFlower.image}" alt="${bestFlower.altText}" class="flower">
        <p class="flower-description">${bestFlower.description}</p>
      `;
  }