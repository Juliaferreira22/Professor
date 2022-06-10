var presenca= document.querySelectorAll('.presenca');
//var ausencia = document.querySelectorAll('.ausencia');

presenca.forEach(function(p){
        p.addEventListener('click',function(){
              var ausente=p.parentNode.querySelector('.ausencia');
        if(ausente.disabled==true){
            ausente.disabled=false;
        }else if(ausente.disabled==false){
            ausente.disabled=true;
        }

    });

});