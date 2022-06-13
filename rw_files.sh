#!/bin/bash
  
file='test_file.txt'  
file2='new_test_file.txt'
i=1  
while read -rline; do  
  
#Reading each line  
echo "Line No. $i : $line"  
i=$((i+1))  
$file > $file2
done < $file && $file2