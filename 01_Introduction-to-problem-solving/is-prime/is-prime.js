module.exports = { 
    //param A : long
    //return an integer
       solve : function(A){
           let count = BigInt(0);
           for(let i = BigInt(1); i <= A/BigInt(i) ; i = i + BigInt(1)){
               if(A % i == BigInt(0)){
                   if(i == A/BigInt(i)){
                       count = count + BigInt(1);
                   }else{
                       count = count + BigInt(2);
                   }
               }
           }
           if(count == BigInt(2)){
               return 1
           }else{
               return 0
           }
       }
   };