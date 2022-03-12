#!/bin/bash
for word in $(cat lista_nomes)
do 
	if [ $word = "Filipe" ]; then
	echo "Encontrei o nome $word"
	else
	a=$(( $a + 1 ))
	fi
done
