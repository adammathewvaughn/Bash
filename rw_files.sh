#!/bin/bash
  
file='test_file.txt'  
file2='new_test_file.txt'
  
while read -r file; do  
    echo  "$file" >> "$file2" 
     
done < $file
