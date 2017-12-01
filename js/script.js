document.addEventListener('DOMContentLoaded', function() {
    //rozwijane menu
    var tooltip = document.querySelector(".menu");
    console.log(tooltip);
    var tooltipMenu = document.querySelector(".menu_detail");
    console.log(tooltipMenu);
    var arrow = document.querySelector(".menu_detail_arrow");
    console.log(arrow);

    tooltip.querySelector("li").addEventListener("mouseover", function(event) {
        event.preventDefault();
        arrow.style.display = "block";
        tooltipMenu.style.display = "block";
    });

    tooltipMenu.addEventListener("mouseover", function(event) {
        //event.preventDefault();
        arrow.style.display = "block";
        tooltipMenu.style.display = "block";
    });
    tooltipMenu.addEventListener("mouseout", function(event) {
        //event.preventDefault();
        arrow.style.display = "none";
        tooltipMenu.style.display = "none";
    });
    //znikający napis

    var newBox1 = document.querySelector(".box_1");
    console.log(newBox1);
    var newBox2 = document.querySelector(".box_2");
    console.log(newBox2);
    var newBoxText2 = document.querySelector(".box_text_2");
    console.log(newBoxText2);
    var newBoxText1 = document.querySelector(".box_text_1");
    console.log(newBoxText2);

    newBox2.addEventListener("mouseover", function(event) {
       newBoxText2.classList.add("hidden");
       newBoxText2.style.display = "none";
   });
   newBox2.addEventListener("mouseout", function(event) {
       newBoxText2.classList.remove("hidden");
       newBoxText2.style.display = "block";
   });

   newBox1.addEventListener("mouseover", function(event) {
       newBoxText1.classList.add("hidden");
       newBoxText1.style.display = "none";
   });
   newBox1.addEventListener("mouseout", function(event) {
       newBoxText1.classList.remove("hidden");
       newBoxText1.style.display = "block";
   });

    //slider
    var leftMarker = document.querySelector(".left");
    var rightMarker = document.querySelector(".right");
    var chairsFoto = document.querySelectorAll(".chair img");
    var index = 0;

    console.log(leftMarker, rightMarker, chairsFoto);

    chairsFoto[index].classList.add("invisible");



    rightMarker.addEventListener("click", function() {
        chairsFoto[index].classList.add("invisible");
        index++;
        if (index == chairsFoto.length) {
            index = 0;
        }
        chairsFoto[index].classList.remove("invisible");
    });
    leftMarker.addEventListener("click", function() {
        chairsFoto[index].classList.add("invisible");
        index--;
        if (index < 0) {
            index = chairsFoto.length - 1;
        }
        chairsFoto[index].classList.remove("invisible");
    });

});
