module.exports = { 
    //param A : integer
    //return an integer
       solve : function(A){
           let count = 0;
           for(let i = 1;i <= A/i; i++ ){
               if(A % i == 0){
                   if( i == A/i){
                       count = count + 1;
                   }else{
                       count = count + 2;
                   }
               }
           }
           return count;
       }
   };