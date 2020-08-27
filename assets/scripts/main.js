$(document).ready(function(){

    $("#button").click(function(e){
      $("#card").clone().appendTo("main").find("input,textarea").val("");

    });
  
});

// function saveTextAsFile(){
//     var textToSave = document.getElementById("name").value;
//     var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
//     var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
//     var fileNameToSaveAs = document.getElementById("content").value;

//     var downloadLink = document.createElement("a");
//     downloadLink.download = fileNameToSaveAs;
//     downloadLink.innerHTML = "Download File";
//     downloadLink.href = textToSaveAsURL;
//     downloadLink.onclick = destroyClickedElement;
//     downloadLink.style.display = "none";
//     document.body.appendChild(downloadLink);
 
//     downloadLink.click();
// }

