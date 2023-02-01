



window.addEventListener('load', function() {
    var image1 = document.getElementById("shape1");
    var timeoutId1;
    
    var image2 = document.getElementById("shape2");
    var timeoutId2;

    var image3 = document.getElementById("shape3");
    var timeoutId3;

    var image4 = document.getElementById("shape4");
    var timeoutId4;

    var image5 = document.getElementById("shape5");
    var timeoutId5;

    if(image1){
        image1.addEventListener("mouseenter", function() {
            timeoutId1 = setTimeout(function(){
                image1.style.display = "none";
            }, 1000);
        });

        image1.addEventListener("mouseleave", function() {
            clearTimeout(timeoutId1);
        });
    } else {
        console.log("No image 1 found");
    }
    if(image2){
        image2.addEventListener("mouseenter", function() {
            timeoutId2 = setTimeout(function(){
                image2.style.display = "none";
            }, 1000);
        });

        image2.addEventListener("mouseleave", function() {
            clearTimeout(timeoutId2);
        });
    } else {
        console.log("No image 2 found");
    }
    
    if(image3){
        image3.addEventListener("mouseenter", function() {
            timeoutId3 = setTimeout(function(){
                image3.style.display = "none";
            }, 1000);
        });

        image3.addEventListener("mouseleave", function() {
            clearTimeout(timeoutId3);
        });
    }
    
});

function downloadFile(file) {
    var link = document.createElement('a');
    link.href = file;
    link.download = 'Resume_Gurveer_Grewal';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  