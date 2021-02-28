
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

public class Challenge {

    public static string Solution(long[] arr) {

        int n = arr.Length; 
      
        Array.Sort(arr); 

        if (n % 2 != 0) {
          median = (double)arr[n / 2]; 
        } else {
          median =(double)(arr[(n - 1) / 2] +  arr[n / 2]) / 2.0; 
        }
      
        // only greater than 0
        int lowNum = 1;
        arr = arr.Where(val => val >= lowNum).ToArray();
      
        var median = findMedian(a, n);  
      
        int left = 0;
        int right = 0;
      
        // get rid of the median
        long numToRemove = median;
        arr = arr.Where(val => val != numToRemove).ToArray();
      
        foreach(var num in arr) {
          if (num < median) {
            //add to left
            left += num;
          } else {
            right += num;
          }
          
          if (left > right) {
            return "left";
          } else if (right > left) {
            return "right";
          } else {
            return "";
          }
        } 
    }
}