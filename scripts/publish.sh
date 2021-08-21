#!/bin/sh
# for npm publish

if [ $1 -eq 'beta'];then
echo "beta"
npm publish --tag beta
# Auto generate version number and tag
elif [ $1 -eq 'next'];then
echo 'alpha'
npm publish --tag next
else
npm publish
fi