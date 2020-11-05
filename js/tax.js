
function caculNbPart(nbchild, status)
{
     let calcstats = 0;
     let N = 0;

     if (status == 'true')
     {
          calcstats = 1;
     }
     console.log(status)

     N = 1 + calcstats + (nbchild * 0.5);

     return N;
}

function caculRevImp(R,  N)
{

     let RI, RInotRound = 0;
     let purcent = R * 0.2;

     RInotRound = (R - purcent) / N;

     RI = roundDecimal(RInotRound);

     return RI;
}

function calcTranch(RI, R, N, deduction)
{
     let I, I2 = 0;

     if (RI < 9807)
     {
          I = 0;
     } 
     else if (RI >= 9807 && RI < 27086)
     {
          I = (R * 0.14) - (1372.98 * N);
     } 
     else if (RI >= 27086 && RI < 72617)
     {
          I = (R * 0.30) - (5706.74 * N);
     } 
     else if (RI >= 72617 && RI < 153783)
     {
          I=(R * 0.41) - (13694.61 * N);
     } 
     else
     {
          I=(R * 0.45) - (19845.93 * N);          
     }

     I2 = roundInt(I) - deduction;

     if (I2 < 0)
     {
          I2 = 0;
     }

     return I2;
}

function roundDecimal(nb){
     return Number.parseFloat(nb).toFixed(2);
}

function roundInt(nb){
     return Number.parseInt(nb).toFixed(0);
}