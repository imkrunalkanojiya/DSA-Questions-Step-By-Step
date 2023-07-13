module.exports = { 
    //param A : integer
    //return an integer
       solve : function(A){
           let count = 0;
           for(let i = 2; i <=A ;i++){
               let isPrime = true;
               for(let j = 2; j*j <= i;j++){
                   if(i%j==0){
                       isPrime = false;
                       break;
                   }
               }
               if(isPrime){
                   count++;
               }
           }
           return count;
       }
   };
   