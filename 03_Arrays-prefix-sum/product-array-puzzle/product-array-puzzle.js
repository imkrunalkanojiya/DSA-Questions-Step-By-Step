module.exports = { 
    //param A : array of integers
    //return a array of integers
       solve : function(A){
           let leftCount = 1;
           let rightCount = 1;
           const leftArr = []
           const rightArr = []
           const ans = []
           for(let i = 0 ; i < A.length ; i++){
               leftCount = leftCount * A[i]
               leftArr.push(leftCount)
           }
   
           for(let i = A.length - 1 ; i >= 0 ; i--){
               rightCount = rightCount * A[i];
               rightArr.unshift(rightCount)
           }
           
           for(let i = 0 ; i < A.length ; i++){
               if(i == 0){
                let multi = rightArr[i + 1]
                ans.push(multi)   
               }
               if(i == A.length - 1){
                   let multi = leftArr[i - 1]
                   ans.push(multi)
               }
               if(i > 0 && i < A.length - 1){
                   let multi = leftArr[i - 1] * rightArr [i + 1]
                   ans.push(multi)
               }
   
           }
           return ans
       }
   }