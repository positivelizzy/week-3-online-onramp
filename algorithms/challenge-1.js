function romanToDecimal(roman) {
    var result = 0;
  
     for (i = 0; i < str.length; i++) 
}
         var s1 = value(str.charAt(i));
  
         if (i + 1 < str.length) 
         {
             var s2 = value(str.charAt(i + 1));
 
             if (s1 >= s2) 
             {
                 result = result + s1;
             } 
             else 
             {
                 result = result + s2 - s1;
                 i++;
             }
         } 
         else  
         {
             result = result + s1;
         }
     }
     return result;
}
module.exports = romanToDecimal
