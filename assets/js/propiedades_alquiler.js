const modifyCard = document.querySelector(".containerCard")
//const linkEnVenta = document.querySelector(".nav-link")
let html = ""

const propiedadesAlquiler = [
  {
    nombre: 'Casa rural con encanto',
    src: 'https://fotografias.larazon.es/clipping/cmsimages02/2019/08/09/8D1BF917-0F08-49C0-AC3B-AE54B449F8C3/97.jpg?crop=1024,576,x0,y53&width=1600&height=900&optimize=low&format=webply',
    descripcion: 'Casa rural tradicional con todas las comodidades.',
    ubicacion: 'Entorno rural',
    habitaciones: 5,
    baños: 2, 
    costo: 180000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Apartamento amueblado cerca del parque',
    src: 'https://photos.encuentra24.com/t_or_fh_l/f_auto/v1/cr/25/07/97/64/25079764_517f8d',
    descripcion: 'Apartamento totalmente amueblado cerca de zonas verdes.',
    ubicacion: 'Cerca del parque',
    habitaciones: 2,
    baños: 2,
    costo: 160000,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Casa adosada con patio',
    src: 'https://st.hzcdn.com/simgs/pictures/patios/casa-adosada-cornella-thinking-home-img~5cd1a9040afae460_4-6007-1-767708e.jpg',
    descripcion: 'Casa adosada con patio privado ideal para familias.',
    ubicacion: 'Barrio tranquilo',
    habitaciones: 4,
    baños: 2,
    costo: 220000,
    smoke: true,
    pets: false
  },
  /*{
    nombre: 'Apartamento céntrico',
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/494882248.jpg?k=0fb759de84efde02b7f5c326a40c1d1d112de2c4860f2dfab93f686ee6e4c48d&o=&hp=1',
    descripcion: 'Apartamento moderno en el corazón de la ciudad.',
    ubicacion: 'Centro de la ciudad',
    habitaciones: 2,
    baños: 2,
    costo: 150000,
    smoke: false,
    pets: false
  },*/
];

for(let propiedad of propiedadesAlquiler){ 
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
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo} </p>
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
