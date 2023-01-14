



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

// Get the canvas element
var pdfCanvas = document.getElementById("pdf-canvas");

// Asynchronously download the PDF
pdfjsLib.getDocument("pictures/WaterlooPaymentW2023.pdf").then(function(pdf) {
 
    // Get the first page of the PDF
    pdf.getPage(1).then(function(page) {
        // Set the scale of the viewport
        var scale = 1.5;
        var viewport = page.getViewport({scale: scale});
        // Set the canvas dimensions to match the viewport
        pdfCanvas.width = viewport.width;
        pdfCanvas.height = viewport.height;

        // Render the PDF page on the canvas
        var renderContext = {
        canvasContext: pdfCanvas.getContext("2d"),
        viewport: viewport
        };
        page.render(renderContext);
    });
});