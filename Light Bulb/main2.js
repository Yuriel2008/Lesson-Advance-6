{
  let inputNumberElement = document.getElementById("input-number");
  let btnRenderElement = document.getElementById("press");
  let bodyElement = document.getElementById("body");
  btnRenderElement.onclick = function () {
    let number = Number(inputNumberElement.value);
    console.log("Clicked!", number);
    let tableHTML = "";
    for (let i = 1; i <= number; i++) {
      let colmnHTML = ``;
      for (let j = 1; j <= number; j++) {
        colmnHTML += `<td></td>`;
      }
      tableHTML += `<tr>${colmnHTML}<tr>`;
    }
    console.log(tableHTML);
    bodyElement.innerHTML = tableHTML;
  };
}

{
  let status = "off";
  let buttonElement = document.getElementById("btn");
  let imageElement = document.getElementById("image");
    buttonElement.onclick = function () {
        if (status == "off") {
            imageElement.innerHTML = `<img src="pic_bulbon.gif" alt="" />`
            status = "on";
        }
        else  {
            imageElement.innerHTML = `<img src="pic_bulboff.gif" alt="" />`
            status = "off";
        }
    }
}
