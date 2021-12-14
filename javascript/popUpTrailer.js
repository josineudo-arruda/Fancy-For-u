function popUp (value) {
    var cleanerTrailers = ["trailer-01","trailer-02","trailer-03","trailer-04","trailer-05","trailer-06","trailer-07","trailer-08"];
    var cleanerImg= ["trailer-img-carrie","trailer-img-flashdance","trailer-img-kill","trailer-img-grease","trailer-img-notebook","trailer-img-clueless","trailer-img-poltergeist","trailer-img-10"];

    // limpar os dados

    for(let i = 0; i < 8; i++) {
        var trailer =  "display: none";
        var setTrailer = document.getElementById("trailerContainer");
        setTrailer.setAttribute("style", trailer);

        var trailerColor = " ";
        var setColor = document.getElementById("presentationTrailers");
        setColor.setAttribute("class", trailerColor);

        var trailerColorImg = " ";
        var setColorImg = document.getElementById(cleanerImg[i]);
        setColorImg.setAttribute("class", trailerColorImg);

        var trailerHeight = "height: 0";
        var setHeight = document.getElementById(cleanerTrailers[i]);
        setHeight.setAttribute("style", trailerHeight);
    }

    var trailerDisplay = false;
    for(let i = 1; i < 9; i++){
        if(value == i) {
            trailerDisplay = true;
        }
    }
    if(trailerDisplay == true) {
        var trailer =  "display: ";
        var setTrailer = document.getElementById("trailerContainer");
        setTrailer.setAttribute("style", trailer);

        var trailerColor = "color";
        var setColor = document.getElementById("presentationTrailers");
        setColor.setAttribute("class", trailerColor);
    }

    if(value == 1) {
        var trailerColorImg = "color-img";
        var setColorImg = document.getElementById("trailer-img-carrie");
        setColorImg.setAttribute("class", trailerColorImg);

        var trailerHeight = "height: 1";
        var setHeight = document.getElementById("trailer-01");
        setHeight.setAttribute("style", trailerHeight);
    } else {
        if(value == 2) {
            var trailerColorImg = "color-img";
            var setColorImg = document.getElementById("trailer-img-flashdance");
            setColorImg.setAttribute("class", trailerColorImg);
    
            var trailerHeight = "height: 1";
            var setHeight = document.getElementById("trailer-02");
            setHeight.setAttribute("style", trailerHeight);
        } else {
            if(value == 3) {
                var trailerColorImg = "color-img";
                var setColorImg = document.getElementById("trailer-img-kill");
                setColorImg.setAttribute("class", trailerColorImg);
        
                var trailerHeight = "height: 1";
                var setHeight = document.getElementById("trailer-03");
                setHeight.setAttribute("style", trailerHeight);
            } else {
                if(value == 4) {
                    var trailerColorImg = "color-img";
                    var setColorImg = document.getElementById("trailer-img-grease");
                    setColorImg.setAttribute("class", trailerColorImg);
            
                    var trailerHeight = "height: 1";
                    var setHeight = document.getElementById("trailer-04");
                    setHeight.setAttribute("style", trailerHeight);
                } else {
                    if(value == 5) {
                        var trailerColorImg = "color-img";
                        var setColorImg = document.getElementById("trailer-img-notebook");
                        setColorImg.setAttribute("class", trailerColorImg);
                
                        var trailerHeight = "height: 1";
                        var setHeight = document.getElementById("trailer-05");
                        setHeight.setAttribute("style", trailerHeight);
                    } else {
                        if(value == 6) {
                            var trailerColorImg = "color-img";
                            var setColorImg = document.getElementById("trailer-img-clueless");
                            setColorImg.setAttribute("class", trailerColorImg);
                    
                            var trailerHeight = "height: 1";
                            var setHeight = document.getElementById("trailer-06");
                            setHeight.setAttribute("style", trailerHeight);
                        } else {
                            if(value == 7) {
                                var trailerColorImg = "color-img";
                                var setColorImg = document.getElementById("trailer-img-poltergeist");
                                setColorImg.setAttribute("class", trailerColorImg);
                        
                                var trailerHeight = "height: 1";
                                var setHeight = document.getElementById("trailer-07");
                                setHeight.setAttribute("style", trailerHeight);
                            } else {
                                if(value == 8) {
                                    var trailerColorImg = "color-img";
                                    var setColorImg = document.getElementById("trailer-img-10");
                                    setColorImg.setAttribute("class", trailerColorImg);
                            
                                    var trailerHeight = "height: 1";
                                    var setHeight = document.getElementById("trailer-08");
                                    setHeight.setAttribute("style", trailerHeight);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}