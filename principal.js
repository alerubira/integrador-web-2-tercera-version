fetch('https://fakestoreapi.com/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parsea la respuesta JSON
  })
  .then(data => {
    // Hacer algo con los datos obtenidos
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
 