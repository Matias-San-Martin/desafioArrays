const modifyCard = document.querySelector(".containerCard")
//const linkEnVenta = document.querySelector(".nav-link")
let html = ""

const propiedadesAlquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 5,
        baños: 2, 
        costo: 180000,
        smoke: false,
        pets: true
      },
      {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 5,
        baños: 2, 
        costo: 180000,
        smoke: false,
        pets: true
      },
      {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 5,
        baños: 2, 
        costo: 180000,
        smoke: false,
        pets: true
      },
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
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo} <p>
                
                <div class="smoke">
                ${propiedad.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>':
                '<p class="text-danger"><i class="fas fa-smoking-ban"></i>  No se permite fumar' }
                </div>

                <div class="pets">
                ${propiedad.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Si se permiten mascotas</p>':'<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas<p>'}
                </div>

            </div>
        </div>    
    </div>
    `;
    html += template;
}

modifyCard.innerHTML = html
