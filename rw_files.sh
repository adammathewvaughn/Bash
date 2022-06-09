#!/bin/bash

LINE=1

while read -r CURRENT_LINE
	do
		echo "$LINE: $CURRENT_LINE"
    ((LINE++))
done < "test_file.txt"


# Path: rw_files.sh
# Compare this snippet from hello_script.sh:
# #!/usr/bin/env bash
# #-*- coding: utf-8 -*-

while write -w CURRENT_LINE
	do
		echo "$LINE: $CURRENT_LINE"
    
done < "new_test_file.txt"