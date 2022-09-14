const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount, typeSpeed) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3><br>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  <p>Your Score <span class="bold red">${typeSpeed}</span> WPM</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount, typeSpeed });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");
    newRow.innerHTML = `
  <h3>${test.questionText}</h3><br>
  <p>You took: <span class="bold">${Math.floor(test.timeTaken)}</span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
    <p>Your Score <span class="bold red">${test.typeSpeed}</span> WPM</p>
  `;

    histories.appendChild(newRow);
  });
}
