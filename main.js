const urlAPI = "https://randomuser.me/api/?results=20";
fetch(urlAPI)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data.results);
    let datos = data.results;
    crearCard(datos);
  });

function crearColor(edad) {
  if (edad <= 3) {
    return "nuevo";
  } else if (edad <= 5) {
    return "medio";
  } else if (edad <= 10) {
    return "avanzado";
  } else if (edad <= 15) {
    return "pro";
  } else {
    console.log("no hay color asignado");
  }
}

function crearCard(usuarios) {
  let $container = document.querySelector(".container");
  console.log($container);
  usuarios.forEach((usuario) => {
    $container.innerHTML += `
        <div class="card-body ${crearColor(usuario.registered.age)}">
        <div class="card-body__point">
          <p>...</p>
        </div>
        <div class="card-body__image">
          <img
            src="${usuario.picture.large}"
            alt="${usuario.name.first}"
          />
        </div>
        <div class="card-body__title">
          <p class="title">${usuario.name.title} ${usuario.name.first} ${
      usuario.name.last
    }</p>
          <p class="subtitle">${usuario.email}</p>
        </div>

        <!-- NUMBERS -->
        <div class="card-body__numbers">
          <div class="body-number">
            <p class="body-number__number">${usuario.gender}</p>
            <p class="body-number__category">gender</p>
          </div>

          <div class="body-number">
            <p class="body-number__number">${usuario.nat}</p>
            <p class="body-number__category">nat</p>
          </div>

          <div class="body-number">
            <p class="body-number__number">${usuario.phone}</p>
            <p class="body-number__category">phone</p>
          </div>
        </div>
        <!-- FINAL NUMBERS -->
        <!-- RANKING -->
        <div class="card-body-ranking">
          <h2>${usuario.registered.age}</h2>
          <p>age</p>
        </div>
        <!--FINAL RANKING -->
        <!-- CIRCULO -->
        <div class="circulo ${crearColor(usuario.registered.age)}"></div>
        <!--FINAL CIRCULO -->
      </div>
          `;
  });
}

/* const urlAPI = "https://www.breakingbadapi.com/api/characters/";
    const resAPI = await fetch(urlAPI);
    const data = await resAPI.json();
    console.log(data); */

/*    if (edad <= 3) {
        return 'nuevo'
    } else if (edad <= 5) {
        return 'medio'
    } else if (edad <= 10) {
        return 'avanzado'
    } else if (edad <= 15) {
        return 'pro'
    } else {
        return 'maestro' */
