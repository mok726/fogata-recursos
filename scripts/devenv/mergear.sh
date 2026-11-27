#!/bin/bash


git fetch origin
git checkout -B imagenes-flux origin/main
git push -f -u origin imagenes-flux
