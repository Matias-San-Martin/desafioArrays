const modifyCard = document.querySelector(".containerCard")
//const linkEnVenta = document.querySelector(".nav-link")
let html = ""

const propiedadesVenta = [
  {
    nombre: 'Casa de campo en las afueras', // <h5>
    src: 'https://s37805.pcdn.co/fotocasa-life/wp-content/uploads/2020/08/casa-campo-de-cuento.png', // <img> src
    descripcion: 'Hermosa casa de campo con amplio jardín y piscina.',
    ubicacion: 'A las afueras de la ciudad', // <p>
    habitaciones: 4, // <i>
    baños: 2, // <i>
    costo: 200000, // <p><i>
    smoke: true, // <p><i>
    pets: true // <p><i>
  },
  {
    nombre: 'Chalet con vistas al mar',
    src: 'https://finquescelblau.com/docs/img_l/3397@48343@l.jpg',
    descripcion: 'Acogedor chalet con vistas panorámicas al mar.',
    ubicacion: 'Costa',
    habitaciones: 3,
    baños: 2, // <i>
    costo: 250000,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Piso luminoso en zona residencial',
    src: 'https://www.engelvoelkers.com/images/0e2a2705-969d-47e1-8047-a3d72cd40a92/piso-luminoso-de-obra-nueva-con-balc%C3%B3n-imagen-virtual-sal%C3%B3n-piso-muestra', 
    descripcion: 'Amplio piso con mucha luz natural en zona tranquila.',
    ubicacion: 'Zona residencial',
    habitaciones: 3,
    baños: 2, // <i>
    costo: 180000,
    smoke: true,
    pets: true
  },
  /*{
    nombre: 'Ático con terraza privada',
    src: 'https://www.balearic-properties.com/property-image/1920_AITAJP1957_66601_V0_8275.jpg',
    descripcion: 'Ático con terraza privada y vistas espectaculares.',
    ubicacion: 'Centro de la ciudad',
    habitaciones: 3,
    baños: 2, // <i>
    costo: 280000,
    smoke: true,
    pets: true
  },*/
];


for(let propiedad of propiedadesVenta){ 
    const template = `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img
                src="${propiedad.src} "
                class="card-img-top"
                alt="Imagen del departamento"/>
            <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                  <i class="fas fa-bath"></i> ${propiedad.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo} 
                </p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>
            </div>
        </div>
    </div>
    `;
    html += template;
}

modifyCard.innerHTML = html