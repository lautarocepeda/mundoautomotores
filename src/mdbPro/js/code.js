(function() {
    getCars();
}());


function showCars(jsonCars) {

    const containerCard = document.getElementById('listCars');

    let htmlCardBody = new String();


    for (const car of jsonCars) {

        htmlCardBody += `
            <div class="col-lg-4 col-md-12 mb-lg-4 mb-5">
        
                <!-- Rotating card -->
                <div class="card-wrapper wow fadeIn">
                    <div id="card-${car.id}" class="card card-rotating text-center">
            
                        <!--Front Side-->
                        <div class="face front">
            
                            <!-- Image -->
                            <div class="view overlay">
                                <img class="card-img-top"
                                    src="${car.pathImg}">
                                <a>
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>
            
                            <!-- Content -->
                            <div class="card-body">
            
                                <a class="rotate-btn float-right" data-card="card-${car.id}"><i class="fas fa-share-alt fa-lg"></i></a>
                                <h4>${car.modelo}</h4>

                                <p class="card-text">${car.descripcion}</p>

                                <a class="link-text">
                                    <a class="btn btn-outline-default btn-rounded rotate-btn waves-effect" data-card="card-${car.id}">VER MÁS</a>
                                </a>
                            </div>


            
                        </div>
                        <!--Front Side-->
            
                        <!--Back Side-->
                        <div class="face back">
            
                            <!-- Content -->
                            <div class="content text-center">
            
                                <h4 class="card-title font-weight-bold my-4">Social shares <i
                                        class="fas fa-times rotate-btn text-muted" data-card="card-${car.id}"></i></h4>
                                <hr>
                                <!-- Social Icons -->
                                <ul class="list-unstyled list-inline d-flex justify-content-center flex-wrap mt-4 py-2">
                                    <li class="list-inline-item"><a class="btn-floating btn-dribbble"><i class="fab fa-dribbble">
                                            </i></a></li>
                                    <li class="list-inline-item"><a class="btn-floating btn-slack"><i class="fab fa-slack-hash">
                                            </i></a></li>
                                    <li class="list-inline-item"><a class="btn-floating btn-ins"><i class="fab fa-instagram">
                                            </i></a></li>
                                    <li class="list-inline-item"><a class="btn-floating btn-pin"><i class="fab fa-pinterest">
                                            </i></a></li>
                                    <li class="list-inline-item"><a class="btn-floating btn-tw"><i class="fab fa-twitter"> </i></a>
                                    </li>
                                    <li class="list-inline-item"><a class="btn-floating btn-gplus"><i class="fab fa-google-plus-g">
                                            </i></a></li>
                                    <li class="list-inline-item"><a class="btn-floating btn-git"><i class="fab fa-github"> </i></a>
                                    </li>
                                </ul>
                                <h5 class="font-weight-bold my-4">Join our community</h5>
                                <hr>
                                <!-- Social Icons -->
                                <ul class="list-unstyled list-inline d-flex justify-content-center flex-wrap mt-4">
                                    <li class="list-inline-item"><a class="btn btn-fb px-4"><i class="fab fa-facebook-f"> </i></a>
                                    </li>
                                    <li class="list-inline-item"><a class="btn btn-tw px-4"><i class="fab fa-twitter"> </i></a></li>
                                    <li class="list-inline-item"><a class="btn btn-li px-4"><i class="fab fa-linkedin-in"> </i></a>
                                    </li>
                                    <li class="list-inline-item"><a class="btn btn-ins px-4"><i class="fab fa-instagram"> </i></a>
                                    </li>
                                </ul>
            
                            </div>
            
                        </div>
                        <!--Back Side-->
            
                    </div>
                </div>
                <!-- Rotating card -->
            
            </div>
            `

    }

    containerCard.innerHTML = htmlCardBody;

}




function getCars() {

    // request url
    const url = './js/autos.json?callback=autos';

    // init object
    const request = new XMLHttpRequest();


    request.open('GET', url);

    request.responseType = 'json';

    request.send();

    // return data json
    request.onload = () => {
        showCars(request.response.autos);
    }

}