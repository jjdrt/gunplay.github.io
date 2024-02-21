// This is for the Shop Tab so that it releases a modal for zoomed product image and description
var modal = document.getElementById('myModal');

var images = document.getElementsByClassName('myImages');
var images2 = document.getElementsByClassName('myImages2');
var images3= document.getElementsByClassName('myImages3');
var images4 = document.getElementsByClassName('myImages4');
var images5 = document.getElementsByClassName('myImages5');
var images6 = document.getElementsByClassName('myImages6');
var images7= document.getElementsByClassName('myImages7');
var images8 = document.getElementsByClassName('myImages8');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var text = document.getElementById("caption");
var text2 = document.getElementById("caption2");
var text3 = document.getElementById("caption3");
var text4 = document.getElementById("caption4");
var text5 = document.getElementById("caption5");
var text6 = document.getElementById("caption6");
var text7 = document.getElementById("caption7");
var text8 = document.getElementById("caption8");



// For First Image----------------------------------------
for (var i = 0; i < images.length; i++) {


  var img = images[i];
  
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    text.style.display = "block";
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    text5.style.display = "none";
    text6.style.display = "none";
    text7.style.display = "none";
    text8.style.display = "none";
    
    
    document.getElementById('myModal').style.overflowY = 'auto';

  }
 

}

// For Second Image---------------------------------------
for (var i = 0; i < images2.length; i++) {


   var img = images2[i];
   
  img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      text.style.display = "none";
      text2.style.display = "block";
      text3.style.display = "none";
      text4.style.display = "none";
      text5.style.display = "none";
      text6.style.display = "none";
      text7.style.display = "none";
      text8.style.display = "none";
      
  }
     
}

// For Third Image---------------------------------------
for (var i = 0; i < images3.length; i++) {


  var img = images3[i];
  
 img.onclick = function() {
     modal.style.display = "block";
     modalImg.src = this.src;
     text.style.display = "none";
     text2.style.display = "none";
     text3.style.display = "block";
     text4.style.display = "none";
     text5.style.display = "none";
     text6.style.display = "none";
     text7.style.display = "none";
     text8.style.display = "none";
      
     
 }
    
}

// For Fourth Image---------------------------------------
for (var i = 0; i < images4.length; i++) {


  var img = images4[i];
  
 img.onclick = function() {
     modal.style.display = "block";
     modalImg.src = this.src;
     text.style.display = "none";
     text2.style.display = "none";
     text3.style.display = "none";
     text4.style.display = "block";
     text5.style.display = "none";
     text6.style.display = "none";
     text7.style.display = "none";
     text8.style.display = "none";
      
     
 }
 
    
}

// For Fifth Image---------------------------------------
for (var i = 0; i < images5.length; i++) {


  var img = images5[i];
  
 img.onclick = function() {
     modal.style.display = "block";
     modalImg.src = this.src;
     text.style.display = "none";
     text2.style.display = "none";
     text3.style.display = "none";
     text4.style.display = "none";
     text5.style.display = "block";
     text6.style.display = "none";
     text7.style.display = "none";
     text8.style.display = "none";
      
     
 }
 
    
}

// For Sixth Image---------------------------------------
for (var i = 0; i < images6.length; i++) {


  var img = images6[i];
  
 img.onclick = function() {
     modal.style.display = "block";
     modalImg.src = this.src;
     text.style.display = "none";
     text2.style.display = "none";
     text3.style.display = "none";
     text4.style.display = "none";
     text5.style.display = "none";
     text6.style.display = "block";
     text7.style.display = "none";
     text8.style.display = "none";
      
     
 }
 
    
}

// For Seventh Image---------------------------------------
for (var i = 0; i < images7.length; i++) {


  var img = images7[i];
  
 img.onclick = function() {
     modal.style.display = "block";
     modalImg.src = this.src;
     text.style.display = "none";
     text2.style.display = "none";
     text3.style.display = "none";
     text4.style.display = "none";
     text5.style.display = "none";
     text6.style.display = "none";
     text7.style.display = "block";
     text8.style.display = "none";
      
     
 }
 
    
}


// For Eighth Image---------------------------------------
for (var i = 0; i < images7.length; i++) {


  var img = images8[i];
  
 img.onclick = function() {
     modal.style.display = "block";
     modalImg.src = this.src;
     text.style.display = "none";
     text2.style.display = "none";
     text3.style.display = "none";
     text4.style.display = "none";
     text5.style.display = "none";
     text6.style.display = "none";
     text7.style.display = "none";
     text8.style.display = "block";
      
     
 }
 
    
}





 






var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
 

}