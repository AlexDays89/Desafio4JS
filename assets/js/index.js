propiedadesventa = [
    { id: 1, titulo: 'Apartamento de lujo en zona exclusiva', subtitulo: ' Este apartamento de lujo está ubicado en una exclusiva zona residencial',  precio: "5.000", ubicacion: `123 Luxury Lane, Prestige Suburb, CA 45678`, imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg", alt: 'NuevaYork', habitaciones: 4, banos: 4, fumar: false, mascotas: false },
    { id: 2, titulo: 'Apartamento acogedor en la montaña', subtitulo: 'Este apartamento acogedor está situado en lo alto de una montaña', precio: "1.200", ubicacion: `789 Mountain Road, Summit Peaks, CA 23456`, imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg", alt: 'NuevaYork', habitaciones: 2, banos: 1, fumar: true, mascotas: true },
    { id: 3, titulo: 'Penthouse de lujo con terraza panorámica', subtitulo: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial', precio: "4.500", ubicacion: `567 Skyline Avenue, Skyview City, CA 56789`, imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg", alt:'Penthouse', habitaciones: 3, banos: 3, fumar: false, mascotas: true },
    { id: 4, titulo: 'Casa estilo moderno', subtitulo: 'Esta casa está ubicada en un condominio cerrado y tranquilo',  precio: "6.000", ubicacion: `345 Fletcher St, Queensboro Suburb, TX 54321`, imagen: "https://images.homify.com/v1441307340/p/photo/image/876952/19TV.jpg", alt: 'Texas', habitaciones: 3, banos: 3, fumar: true, mascotas: false },
    { id: 5, titulo: 'Bungalow en el bosque', subtitulo: 'Esta cabaña es perfecta para escapar de la ciudad', precio: "2.200", ubicacion: `Camino Puyehue S/N, Puyehue, Osorno`, imagen: "https://www.centralcasas.cl/wp-content/uploads/2024/06/PUYEHUE-1024x576.jpg", alt: 'Osorno', habitaciones: 3, banos: 2, fumar: true, mascotas: true },
]

const propiedadesalquiler = [
    { id: 1, titulo: 'Casa estilo japonés', subtitulo: ' Este casa en el corazón de Okinawa es perfecta para descansar',  precio: "5.000", ubicacion: `123 Miyagi Street, Karate Village, Okinawa`, imagen: "https://st3.depositphotos.com/4028465/35369/i/450/depositphotos_353698266-stock-photo-kitsuki-japan-october-2016-ohara.jpg", alt: 'Okinawa', habitaciones: 3, banos: 3, fumar: false, mascotas: true },
    { id: 2, titulo: 'Casa en el espacio', subtitulo: 'En esa casa podrás estar solo!! El transporte corre por tu cuenta', precio: "2.200", ubicacion: `Luna S/N, Sistema Solar, Vía Láctea, Espacio`, imagen: "https://img.asmedia.epimg.net/resizer/v2/DO5K4O46W5CCRFJPD5RFS4TPBA.jpg?auth=ada374159a7b23be505770ab037bbe1cf51bb7828922f9f3d3c2facff9bc33a1&width=360&height=203&smart=true", alt: 'Casa de la luna', habitaciones: 2, banos: 1, fumar: false, mascotas: false },
    { id: 3, titulo: 'Domo paradisiaco bajo el agua', subtitulo: 'Vivirás como Arenita de Bob Esponja, pero de lujo', precio: "3.500", ubicacion: `567 Skyline Avenue, Skyview City, CA 56789`, imagen: "https://i.pinimg.com/736x/7d/e2/0c/7de20c47d9068a473ba55f073bd2ad66.jpg", alt:'Domo Acuático', habitaciones: 1, banos: 1, fumar: true, mascotas: false },
    { id: 4, titulo: 'Apartamento en el centro de la ciudad', subtitulo: ' Este apartamento de 2 habitaciones está ubicado en el corazon de la ciudad',  precio: "2.000", ubicacion: `123 Main Street, Luxury Suburb, CA 42678`, imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=6", alt: 'Chicago', habitaciones: 4, banos: 4, fumar: false, mascotas: false },
    { id: 5, titulo: 'Apartamento luminoso con vista al mar', subtitulo: 'Este hermoso apartamento ofrece una vista impresionante al mar', precio: "1.200", ubicacion: `456 Ocean Avenue, Seaside Town, CA 56789`, imagen: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: 'Vista al Mar', habitaciones: 3, banos: 3, fumar: true, mascotas: true },
  ]

let templatev = ''
let templatea = ''
let contadorventa = 0
let contadoralquiler = 0

for (let propiedadv of propiedadesventa) {
    if (contadorventa <= 2) {
        templatev += 
            `<div class="col-md-4 mb-4">
            <div class="card">
            <img src= ${propiedadv.imagen} class="card-img-top" alt=${propiedadv.alt}/>
            <div class="card-body">
            <h5 class="card-title">${propiedadv.titulo}</h5>
            <p class="card-text">${propiedadv.subtitulo}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedadv.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedadv.habitaciones} | <i class="fas fa-bath"></i> ${propiedadv.banos}</p>
            <p><i class="fas fa-dollar-sign"></i>${propiedadv.precio}</p>
            ${propiedadv.fumar ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar </p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i>No se permite fumar</p>'}
            ${propiedadv.mascotas ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i>No se permiten mascotas</p>'}
            </div>
            </div>
            </div> `
            contadorventa++;
        } else {
            break;
        }}

for (let propiedada of propiedadesalquiler) {
    if (contadoralquiler <= 2) {
        templatea += 
            `<div class="col-md-4 mb-4">
            <div class="card">
            <img src= ${propiedada.imagen} class="card-img-top" alt=${propiedada.alt}/>
            <div class="card-body">
            <h5 class="card-title">${propiedada.titulo}</h5>
            <p class="card-text">${propiedada.subtitulo}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedada.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedada.habitaciones} | <i class="fas fa-bath"></i> ${propiedada.banos}</p>
            <p><i class="fas fa-dollar-sign"></i>${propiedada.precio}</p>
            ${propiedada.fumar ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar </p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i>No se permite fumar</p>'}
            ${propiedada.mascotas ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i>No se permiten mascotas</p>'}
            </div>
            </div>
            </div> `
        contadoralquiler++;
        } else {
            break;
        }}           

const venta = document.querySelector('#venta')
venta.innerHTML = templatev;

const alquiler = document.querySelector('#alquiler') 
alquiler.innerHTML = templatea;
