function onColorRangeChange()
{
            // getElement p
            let pE = document.getElementById("pColor");
            let rE = document.getElementById("redSlider");
            let gE = document.getElementById("greenSlider");
            let bE = document.getElementById("blueSlider");
            // getElement redSlider
            // getElement greenSlider
            // getElement blueSlider
            let rgbprop = "rgb("+rE.value+","+gE.value+","+bE.value+")";
            console.log(rgbprop);
            // Get value of r, g, b from sliders
            // Create a string rgb(r, g, b)
            pE.innerHTML = rgbprop;
            pE.style.backgroundColor = rgbprop;
            // Set above string as innerHTML of
            // Set rgb value as p.style.backgroundColor = 
        }