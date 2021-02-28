/*
Null and Undefined are both data types in JavaScript. Undefined is a variable that has been declared but not assigned a value. Null as an assignment value. So you can assign the value null to any variable which basically means it's blank.
*/

function quickSort(arr, lo, hi) {  
    if (lo === undefined) lo = 0  
    if (hi === undefined) hi = arr.length - 1

    if (lo < hi) {    
        // partition the array    
        var p = partition(arr, lo, hi)    
        console.log('partition from, ' + lo + ' to ' + hi + '=> partition: ' + p)    
        // sort subarrays    
        quickSort(arr, lo, p - 1)    
        quickSort(arr, p + 1, hi)  }  
        // for initial call, return a sorted array  
        if (hi - lo === arr.length - 1) 
            return arr
        }

    function partition(arr, lo, hi) {  
        // choose last element as pivot  
        var pivot = arr[hi]  
        // keep track of index to put pivot at  
        var pivotLocation = lo  
        // loop through subarray and if element <= pivot, place element before pivot  
        for (var i = lo; i < hi; i++) {    
            if (arr[i] <= pivot) {      
                swap(arr, pivotLocation, i)      
                pivotLocation++    
            }  
        }  
        swap(arr, pivotLocation, hi)  
        return pivotLocation
    }

    function swap(arr, index1, index2) {  
        if (index1 === index2) return  
        var temp = arr[index1]  
        arr[index1] = arr[index2]  
        arr[index2] = temp  
        console.log('swapped' + arr[index1], arr[index2], +' in ', arr)  
        return arr
    }

    console.log('result: ' + quickSort([1, 4, 3, 56, 9, 8, 7, 5]));