#!/bin/bash
  
file='test_file.txt'  
file2='new_test_file.txt'
i=1  
while read line; do  
    echo $i $line >> $file2  
    i=$((i+1))  
done < $file
