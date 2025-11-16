const planetas = {
    mercurio:  {
        palabras:["mercurio" , "Mercurio"],
        nombre: "Mercurio",
        distancia:"0.39(UA) / 57,900,000 Km",
        diametro: "4880 Km",
        masa:"0.06",
        orbita: "88 días aprox.",
        rotacion:"58 días 15.5 horas",
        descubrimiento: "Antigüedad",
        composicion: "Núcleo de hierro, manto rocoso y una corteza delgada.",
        img: "mercury_3.png"
    },

    venus: {
        palabras:["venus" , "Venus"],
        nombre: "Venus",
        distancia:"0.72(UA) / 108,200,000 Km",
        diametro: "12,104 Km",
        masa:"0.82",
        orbita: "225 dias o 7.4 meses",
        rotacion:"243 dias",
        descubrimiento: "Antigüedad",
        composicion: "Núcleo de hierro y níquel, manto rocoso, corteza sólida y una atmósfera densa de Co2.",
        img: "Venus_1_NASA's Mariner 10 spacecraft.jpg"

    },
    tierra: {
        palabras:["tierra" , "Tierra"],
        nombre: "Tierra",
        distancia:"1.00(UA) / 149,600,000 Km",
        diametro: "12,742 Km",
        masa:"1.00",
        orbita: "365.25 días (1 año)",
        rotacion:"23.9 horas (1 dia)",
        descubrimiento: "Antigüedad",
        composicion: "Núcleo de hierro y níquel, manto rocoso, corteza de silicatos y agua superficial.",
        img: "tierra_1.jpeg"
     },
     marte: {
        palabras:["marte", "Marte"],
        nombre: "Marte",
        distancia:"1.52(UA) / 227,900,000 Km",
        diametro: "6,779 Km",
        masa:"0.11",
        orbita: "687 dias (1.88 años / 22.6 meses)",
        rotacion:"24.6 horas (1 dia y 0.6 horas",
        descubrimiento: "Antigüedad",
        composicion: "Núcleo de hierro, manto rocoso y una corteza de silicatos con hielo en los polos.",
        img: "mars_1.png"
    
    },
    jupiter: {
        palabras: ["jupiter", "Jupiter", "júpiter", "Júpiter"],
        nombre: "Júpiter",
        distancia:"5.20(UA) / 778,500,000 Km",
        diametro: "139,820 Km",
        masa:"318",
        orbita: "4,333 dias (11.86 años)",
        rotacion:"9.93 horas",
        descubrimiento: "Antigüedad",
        composicion: "Hidrógeno metálico liquido y una atmósfera exterior de hidrógeno y helio.",
        img: "jupiter_2.jpg"
    },

    saturno: {
        palabras: ["saturno", "Saturno"],
        nombre: "Saturno",
        distancia:"9.58(UA) / 1,430,000,000 Km",
        diametro: "116,460 Km",
        masa:"95.1",
        orbita: "10,759 dias (29.46 años)",
        rotacion:"10.7 horas",
        descubrimiento: "Antigüedad",
        composicion: "Hidrógeno metálico líquido, y una atmósfera exterior de hidrógeno y helio.",
        img: "saturn_1.png"
    
    },
    urano: {
        palabras: ["urano", "Urano"],
        nombre: "Urano",
        distancia:"19.22(UA) / 2,870,000,000 Km",
        diametro: "50,724 Km",
        masa:"14.6",
        orbita: "30,687 días (84.01 años)",
        rotacion:"17.24 horas",
        descubrimiento: "13 de Marzo de 1781 por el astrónomo alemán William Herschel",
        composicion: "Núcleo pequeño y rocoso, un manto grande de hielo (agua, amoníaco y metano), y una atmósfera de hidrógeno y helio.",
        img: "uranus_2.jpg"
    
    },

    neptuno: {
        palabras: ["neptuno", "Neptuno"],
        nombre: "Neptuno",
        distancia:"30.05(UA) / 4,500,000,000 Km",
        diametro: "49,244 Km",
        masa:"17.2",
        orbita: "60,190 días (164.8 años)",
        rotacion:"16.11 horas",
        descubrimiento: "23 de Septiembre de 1846 por los astronomos Urbain Le Verrier y Johann Galle",
        composicion: "Núcleo rocoso, manto de hielo, y una atmósfera dinámica de hidrógeno y helio.",
        img: "neptune_1.png"
    
    }
};

document.getElementById("search-btn").addEventListener("click", buscarPlaneta);

function buscarPlaneta() {
    const input = document.getElementById("search-input").value.trim().toLowerCase();

    let planetaEncontrado = null;

    for (const key in planetas) {
        if (planetas[key].palabras.map(p => p.toLowerCase()).includes(input)) {
            planetaEncontrado = planetas[key];
            break;
        }

    }

    if (!planetaEncontrado) {
        alert("Ingresa un planeta del sistema solar");
        document.getElementById("search-input").value = "";
        return;
    }

document.getElementById("p-nombre").textContent = planetaEncontrado.nombre;
document.getElementById("p-distancia").textContent = planetaEncontrado.distancia;
document.getElementById("p-diametro").textContent = planetaEncontrado.diametro;
document.getElementById("p-masa").textContent = planetaEncontrado.masa;
document.getElementById("p-orbita").textContent = planetaEncontrado.orbita;
document.getElementById("p-rotacion").textContent = planetaEncontrado.rotacion;
document.getElementById("p-descubrimiento").textContent = planetaEncontrado.descubrimiento;
document.getElementById("p-composicion").textContent = planetaEncontrado.composicion;
document.getElementById("p-img").src = planetaEncontrado.img;

document.getElementById("planet-info").style.display = "flex";

}
