module.exports = { 
    //param A : array of integers
    //return a array of integers
       solve : function(A){
           const pre = [];
           pre[0] = A[0]
           for(let i = 1; i < A.length ; i++){
               pre[i] = pre[i - 1] + A[i]
           }
           return pre;
       }
   };
   