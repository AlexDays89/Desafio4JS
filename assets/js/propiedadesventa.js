propiedadesventa = [
  { id: 1, titulo: 'Apartamento de lujo en zona exclusiva', subtitulo: ' Este apartamento de lujo está ubicado en una exclusiva zona residencial',  precio: "5.000", ubicacion: `123 Luxury Lane, Prestige Suburb, CA 45678`, imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg", alt: 'NuevaYork', habitaciones: 4, banos: 4, fumar: false, mascotas: false },
  { id: 2, titulo: 'Apartamento acogedor en la montaña', subtitulo: 'Este apartamento acogedor está situado en lo alto de una montaña', precio: "1.200", ubicacion: `789 Mountain Road, Summit Peaks, CA 23456`, imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg", alt: 'NuevaYork', habitaciones: 2, banos: 1, fumar: true, mascotas: true },
  { id: 3, titulo: 'Penthouse de lujo con terraza panorámica', subtitulo: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial', precio: "4.500", ubicacion: `567 Skyline Avenue, Skyview City, CA 56789`, imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg", alt:'Penthouse', habitaciones: 3, banos: 3, fumar: false, mascotas: true },
  { id: 4, titulo: 'Casa estilo moderno', subtitulo: 'Esta casa está ubicada en un condominio cerrado y tranquilo',  precio: "6.000", ubicacion: `345 Fletcher St, Queensboro Suburb, TX 54321`, imagen: "https://images.homify.com/v1441307340/p/photo/image/876952/19TV.jpg", alt: 'Texas', habitaciones: 3, banos: 3, fumar: true, mascotas: false },
  { id: 5, titulo: 'Bungalow en el bosque', subtitulo: 'Esta cabaña es perfecta para escapar de la ciudad', precio: "2.200", ubicacion: `Camino Puyehue S/N, Puyehue, Osorno`, imagen: "https://www.centralcasas.cl/wp-content/uploads/2024/06/PUYEHUE-1024x576.jpg", alt: 'Osorno', habitaciones: 3, banos: 2, fumar: true, mascotas: true },
]

let templatev = ''

for (let propiedadv of propiedadesventa) {
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
}

const venta = document.querySelector('#venta')
venta.innerHTML = templatev
