const fillData = async () => {
  fetch("http://localhost:3000/data").then((res) => {
    return res.json()
  }).then(data => {
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const age = document.getElementById("age")
    name.textContent = `Name: ${data.name}`
    email.textContent = `Email: ${data.email}`
    age.textContent = `Age: ${data.age}`
  });
};

const app = () => {
  fillData();
};

app();
    