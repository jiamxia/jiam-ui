#!/bin/sh
# Usage: npm run publish beta
# for npm publish

if [ $1 = "beta" ];then
echo "beta"
npm publish --tag beta
# Auto generate version number and tag
elif [ $1 = "next" ];then
echo 'alpha'
npm publish --tag next
else
echo 'latest'
npm publish
fi