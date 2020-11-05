'use strict'

var buttonvalid = document.getElementById('valid');
var buttonclean = document.getElementById('clean');

var reslutzone = document.querySelector('.result');

var rev_imp = document.getElementById('ri');
var nb_part = document.getElementById('n');
var mnt_imp = document.getElementById('mi');


function onClickValid() 
{
     let income = document.getElementById("income");
     let status = document.getElementById("status");
     let nbchild = document.getElementById("nbchild");
     let deduction = document.getElementById("deduction");


     if (lastname.value.length < 3 || firstname.value.length < 3 || income.value < 0 || nbchild.value < 0 || deduction.value < 0)
     {
          reslutzone.classList.replace('result', 'bad');
          reslutzone.classList.replace('good', 'bad');
     }
     else
     {
          reslutzone.classList.replace('result', 'good');
          reslutzone.classList.replace('bad', 'good');

          nb_part.value = caculNbPart(nbchild.value, status.value);
          rev_imp.value = caculRevImp(income.value,  nb_part.value);
          mnt_imp.value = calcTranch(rev_imp.value, income.value, nb_part.value, deduction.value);
     } 
}

function onClickClean() 
{
     reslutzone.classList.replace('bad', 'result');
     reslutzone.classList.replace('good', 'result');
     
     rev_imp.value = "";
     nb_part.value = "";
     res_number.value = "";
}

buttonvalid.addEventListener('click', onClickValid);
buttonclean.addEventListener('click', onClickClean)
document.addEventListener('')