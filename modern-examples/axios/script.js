function fetchUserAxios() {
  document.getElementById("axios-result").innerText = "Loading...";
  axios
    .get("https://randomuser.me/api/")
    .then(function (response) {
      const user = response.data.results[0];
      const html = `<strong>Name:</strong> ${user.name.first} ${user.name.last}<br>
                          <strong>Email:</strong> ${user.email}<br>
                          <img src="${user.picture.medium}" alt="User Picture">`;
      document.getElementById("axios-result").innerHTML = html;
    })
    .catch(function (error) {
      document.getElementById("axios-result").innerText = "Error: " + error;
    });
}

function fetchLocalFile1() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

fetchLocalFile1();

function fetchLocalFile2() {
  axios
    .get(
      "https://api.aladhan.com/v1/timingsByCity?city=Islamabad&country=Pakistan&method=2"
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

fetchLocalFile2();

function fetchLocalFile3() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

fetchLocalFile3();

function fetchLocalFile4() {
  axios
    .get(" https://randomuser.me/api/")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

fetchLocalFile4();

function fetchLocalFile5() {
  axios
    .get("sample.txt")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

fetchLocalFile5();
