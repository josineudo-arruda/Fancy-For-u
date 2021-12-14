function searchMovie() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieName = urlParams.get('search');
    var lowCaseMovie = movieName.toLowerCase();
    var newName = lowCaseMovie.replace(/ /g, ",");
    var searchValue = newName.split(",");

    var movieBDDS = []
    movieBDDS.push(["grease"]);
    movieBDDS.push(["carrie"]);
    movieBDDS.push(["flashdance"]);
    movieBDDS.push(["poltergeist"]);
    movieBDDS.push(["10","coisas","que","eu","odeio","em","voce","ten","things","that","I","hate","about","you"]);
    movieBDDS.push(["as","patricinhas","de","beverly","hills","clueless"]);
    movieBDDS.push(["kill","bill"]);
    movieBDDS.push(["diario","de","uma","paixao","the","notebook"]);


    function tryMovie(input, movie) {
        for(var i = 0; i < input.length; i++) {
            for(var j = 0; j < movie.length; j++) {
                if((JSON.stringify(input[i])==JSON.stringify(movie[j]))== true)
                    return true;
            }
        }
    return false;
    }

    var movieSituation = ["","","","","","","",""]

    for(let i = 0; i < 8; i++) {
        movieSituation[i] = tryMovie(searchValue, movieBDDS[i]);
    }
    
    var contt = 0;
    for(let i = 0; i < 8; i++) {
        if(movieSituation[i] == true) {
            contt++;
        }
    }
    if(contt > 4) {
        contt = 4;
    }

    var poster = ["poster01","poster02","poster03","poster04"];
    var button = ["button-link01","button-link02","button-link03","button-link04"];
    var display = ["display-movie01","display-movie02","display-movie03","display-movie04"];

    for(let i = 0; i < contt; i++) {
        var displayDiv =  "display: ";
        var setDisplay = document.getElementById(display[i]);
        setDisplay.setAttribute("style", displayDiv);
    }

    for(let i = 0; i < contt; i++) {
        if(movieSituation[0] == true) {
            var movieImg =  "images/decadas/famoso-grease.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", movieImg);

            var movieLink = "Filmes_prontos/Grease.html";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", movieLink);

            movieSituation[0] = false;
        } else {
            if(movieSituation[1] == true) {
                var movieImg =  "images/decadas/famoso-carrie.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", movieImg);
            
                var movieLink = "Filmes_prontos/Carrie.html";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("href", movieLink);

                movieSituation[1] = false;
            } else {
                if(movieSituation[2] == true) {
                    var movieImg =  "images/decadas/famoso-flashdance.jpg";
                    var setImg = document.getElementById(poster[i]);
                    setImg.setAttribute("src", movieImg);
                
                    var movieLink = "Filmes_prontos/Flashdance.html";
                    var setLink = document.getElementById(button[i]);
                    setLink.setAttribute("href", movieLink);
    
                    movieSituation[2] = false;
                } else {
                    if(movieSituation[3] == true) {
                        var movieImg =  "images/decadas/famoso-poltgeist.jpg";
                        var setImg = document.getElementById(poster[i]);
                        setImg.setAttribute("src", movieImg);
                    
                        var movieLink = "Filmes_prontos/Poltergeist.html";
                        var setLink = document.getElementById(button[i]);
                        setLink.setAttribute("href", movieLink);
        
                        movieSituation[3] = false;
                    } else {
                        if(movieSituation[4] == true) {
                            var movieImg =  "images/decadas/famoso-10coisas.jpg";
                            var setImg = document.getElementById(poster[i]);
                            setImg.setAttribute("src", movieImg);
                        
                            var movieLink = "Filmes_prontos/10 Coisas que Eu Odeio em Você.html";
                            var setLink = document.getElementById(button[i]);
                            setLink.setAttribute("href", movieLink);
            
                            movieSituation[4] = false;
                        } else {
                            if(movieSituation[5] == true) {
                                var movieImg =  "images/decadas/famoso-patricinhas.jpg";
                                var setImg = document.getElementById(poster[i]);
                                setImg.setAttribute("src", movieImg);

                                var movieLink = "Filmes_prontos/AsPatricinhaDeBeverlyHills.html";
                                var setLink = document.getElementById(button[i]);
                                setLink.setAttribute("href", movieLink);
                
                                movieSituation[5] = false;
                            } else {
                                if(movieSituation[6] == true) {
                                    var movieImg =  "images/decadas/famoso-kill.jpg";
                                    var setImg = document.getElementById(poster[i]);
                                    setImg.setAttribute("src", movieImg);
                    
                                    var movieLink = "Filmes_prontos/KillBill.html";
                                    var setLink = document.getElementById(button[i]);
                                    setLink.setAttribute("href", movieLink);
                    
                                    movieSituation[6] = false;
                                } else {
                                    if(movieSituation[7] == true) {
                                        var movieImg =  "images/decadas/famoso-diario.jfif";
                                        var setImg = document.getElementById(poster[i]);
                                        setImg.setAttribute("src", movieImg);
                        
                                        var movieLink = "Filmes_prontos/DiárioDeUmaPaixão.html";
                                        var setLink = document.getElementById(button[i]);
                                        setLink.setAttribute("href", movieLink);
                        
                                        movieSituation[7] = false;
                                    } 
                                }
                            } 
                        }
                    }
                }
            }
        }
    }

    if(contt == 0) {
        const nextURL = 'erro-page.html';
        window.location.href = nextURL;
        window.location.assign(nextURL);
        window.location.replace(nextURL);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    searchMovie();
  });
