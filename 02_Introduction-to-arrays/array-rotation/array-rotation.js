module.exports = { 
    //param A : array of integers
    //param B : integer
    //return a array of integers
       solve : function(A, B){
           const reverse = (arr,start,end) => {
               while(start < end){
                   let temp = arr[start];
                   arr[start] = arr[end];
                   arr[end] = temp;
                   start++;
                   end--;
               }
           }
           B = B % A.length;
           reverse(A,0,A.length - 1);
           reverse(A,0,B-1);
           reverse(A,B,A.length - 1)
           return A
       }
   };
   