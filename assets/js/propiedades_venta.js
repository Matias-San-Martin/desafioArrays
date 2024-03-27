const modifyCard = document.querySelector(".containerCard")
let html = ""

const propiedadesVenta = [
    {
        nombre: 'Penthouse de lujo con terraza panorámica', // <h5>
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg', // <img> src
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789', // <p>
        habitaciones: 4, // <i>
        baños: 2, // <i>
        costo: 200000, // <p><i>
        smoke: true, // <p><i>
        pets: true // <p><i>
    },
    {
        nombre: 'Apartamento acogedor en la montaña', // <h5>
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg', // <img> src
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456', // <p>
        habitaciones: 4, // <i>
        baños: 2, // <i>
        costo: 200000, // <p><i>
        smoke: true, // <p><i>
        pets: true // <p><i>
    },
    {
        nombre: 'Apartamento de lujo en zona exclusiva', // <h5>
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg', // <img> src
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane,Prestige Suburb, CA 45678', // <p>
        habitaciones: 4, // <i>
        baños: 2, // <i>
        costo: 200000, // <p><i>
        smoke: true, // <p><i>
        pets: true // <p><i>
    },
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