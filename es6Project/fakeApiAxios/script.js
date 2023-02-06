let tbody = document.querySelector("tbody");

axios.get("https://jsonplaceholder.typicode.com/albums")
  .then((res) => {
    console.log(res.data);
    res.data.map((val, id) => {
      tbody.innerHTML += `
      <tr>
      <td>${val.userId}</td>
      <td>${val.id}</td>
      <td>${val.title}</td>
      </tr>
      `
    })
  })
  .catch((err) => {

  })