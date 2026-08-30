const boton = document.getElementById("btnNoticias");
const noticias = document.getElementById("noticias");

boton.addEventListener("click", function() {

    fetch("https://newsapi.org/v2/everything?q=Paraguay&language=es&apiKey=478567d695f14619bc5d1163f3fbb6b9")

        .then(response => response.json())

        .then(data => {

            noticias.innerHTML = "";

            data.articles.forEach(noticia => {

                noticias.innerHTML += `

                    <div class="bg-white rounded-lg shadow-md overflow-hidden h-full">

                        <img src="${noticia.urlToImage || 'logo.png'}"
                             class="w-full h-48 object-cover">

                        <div class="p-4">

                            <h5 class="text-xl font-bold mb-2">
                                ${noticia.title}
                            </h5>

                            <p class="text-gray-600 mb-4">
                                ${noticia.description || "Sin descripción"}
                            </p>

                            <a href="${noticia.url}"
                               target="_blank"
                               class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

                                Leer noticia

                            </a>

                        </div>

                    </div>

                `;

            });

        })

        .catch(error => {

            console.log(error);

        });

});