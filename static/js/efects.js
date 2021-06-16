const list_skill = document.getElementsByClassName("skill-list");
const container = document.getElementsByClassName("container");

/* Inicia o Loop para ficar verficando se o cursor, entra ou sai da div */
for(let i = 0; i < 5; i++) {
  list_skill[i].addEventListener("mouseover", function(e) {
    var x = e.pageX ,  /* Pega as cordenadas do mouse  */ 
      y = e.pageY
    var div =  container[i]                             /* Altera o css para mostrar o card */
    div.children[0].style ='visibility: visible;'+ 'top:' + y +'px;' + 'left:'+ x +'px;'   
   })
  list_skill[i].addEventListener("mouseout", function() {
    var div =  container[i]
    div.children[0].style.visibility = "hidden"  /*Altera Css escondendo card*/
  })
}  