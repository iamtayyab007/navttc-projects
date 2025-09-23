function fetchUser() {
  document.getElementById("fetch-result").innerText = "Loading...";
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      const html = `<strong>Name:</strong> ${user.name.first} ${user.name.last}<br>
                          <strong>Email:</strong> ${user.email}<br>
                          <img src="${user.picture.medium}" alt="User Picture">`;
      document.getElementById("fetch-result").innerHTML = html;
    })
    .catch((error) => {
      document.getElementById("fetch-result").innerText = "Error: " + error;
    });
}

function fetchLocalFile1() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

fetchLocalFile1();

function fetchLocalFile2() {
  fetch(
    "https://api.aladhan.com/v1/timingsByCity?city=Islamabad&country=Pakistan&method=2"
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("error:", error));
}

fetchLocalFile2();

function fetchLocalFile3() {
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("error:", error));
}

fetchLocalFile3();

function fetchLocalFile4() {
  fetch(" https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("error", error));
}

fetchLocalFile4();

function fetchLocalFile5() {
  fetch("sample.txt")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("error", error));
}

fetchLocalFile5();
