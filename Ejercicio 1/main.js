let paragraph = document.getElementById("myParagraph");
        let button = document.getElementById("myButton");

        button.addEventListener("click", function() {
            if (paragraph.style.color === "purple") {
                paragraph.style.color = "orange";
            } else {
                paragraph.style.color = "purple";
            }
        });
