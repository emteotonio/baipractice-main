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
          description: "Irises symbolize hope and wisdom. They have inspred many literary works with their vibrant colors and unique shape. This flower is perfect for those who are always looking for the silver lining and are always ready to learn something new.",
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
          description: "Tulips are happy, perky flowers that love the light. Tulips represent love and new beginnings. They are perfect for the vibrant, friendly, and warm person. Tulips often celebrate significant life changes, perfect for the adaptable person, as well.",
          adventurousWeight: 1,
          optimisticWeight: 4,
          creativeWeight: 3,
          responsibleWeight: 1,
          emotionalWeight: 3
        },
        {
          name: "Daisies",
          image: "images/daisy.avif",
          altText: "A bouquet of white daisies wrapped in brown bow.",
          description: "Daisies are simple, cheerful flowers that symbolize purity and innocence. They are perfect for the person who is always looking for the good in the world and who is always ready to lend a helping hand.",
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
          description: "Hydrangeas are a symbol of gratitude and grace. They are great for people who are thoughtful and rational, willing to understand multiple perspectives, representing their deep understanding and empathy.",
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
          description: "For problem solvers and leaders, symbolizing perseverance and dignity. Magnolias are perfect for those who are always looking for the next challenge and are always ready to take on the world.",
          adventurousWeight: 4,
          optimisticWeight: 3,
          creativeWeight: 1,
          responsibleWeight: 3,
          emotionalWeight: 1
        },
        {
            name: "Rose",
            image: "images/rose.avif",
            altText: "A bouqet of red roses flowers",
            description: "Roses symbolize love and beauty. Due to their thorns, roses are suitable for those who are able to find solutions to problems with a smile. It's a classic beauty.",

            adventurousWeight: 2,
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

  function resetQuiz() {
    // sliders
    document.getElementById("adventurous").value = 0;
    document.getElementById("optimistic").value = 0;
    document.getElementById("creative").value = 0;
    document.getElementById("responsible").value = 0;
    document.getElementById("emotional").value = 0;

    //numbers
    document.getElementById("adventurousValue").textContent = 0;
    document.getElementById("optimisticValue").textContent = 0;
    document.getElementById("creativeValue").textContent = 0;
    document.getElementById("responsibleValue").textContent = 0;
    document.getElementById("emotionalValue").textContent = 0;

    // clear
    document.getElementById("flowerRecommendation").innerHTML = "";
  }