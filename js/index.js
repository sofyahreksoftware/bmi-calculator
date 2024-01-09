{
  const displayResult = (result, category) => {
    const resultLabel = document.querySelector(".js-resultLabel");

    resultLabel.innerHTML = `
      <p>Your BMI is 
      <strong>${Number(result.toFixed(2)).toLocaleString("pl-PL")}</strong>.
      </p>
      <p>${
        category === "underweight" ||
        category === "overweight" ||
        category === "normal weight"
          ? `You are <strong>${category}</strong>.`
          : `You have an <strong>${category}</strong>.`
      }</p>`;
  };

  const switchBMICategory = (result) => {
    let category;

    switch (true) {
      case result < 18.5:
        category = "underweight";
        break;
      case result >= 18.5 && result < 24.9:
        category = "normal weight";
        break;
      case result >= 24.9 && result < 29.9:
        category = "overweight";
        break;
        D;
      case result >= 29.9 && result < 34.9:
        category = "obesity class I (Moderate obesity)";
        break;
      case result >= 34.9 && result < 39.9:
        category = "obesity class II (Severe obesity)";
        break;
      case result >= 39.9:
        category = "obesity class III (Very severe obesity)";
        break;

      default:
        category = "indefinite category";
    }

    displayResult(result, category);
  };

  const calculateResult = () => {
    const form = document.querySelector(".js-form");
    const weight = document.querySelector(".js-weight");
    const height = document.querySelector(".js-height");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let result;
      result = weight.value / height.value ** 2;
      switchBMICategory(result);
    });
  };

  calculateResult();
}
