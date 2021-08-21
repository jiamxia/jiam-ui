#!/bin/sh
# Usage: npm run testrelease v0.0.3-1
# About shell cmd params
# $0 process name
# $1 the first params
# $2 the second params
# ... go on
# Release branch
master="main"

git pull origin $master
echo "Current pull origin $master."
if [-z $1];then
echo "no tag-version input, so default current version plus 1"
# Auto generate version number and tag
standard-version
else
echo $1
standard-version -r $1
fi

git push --follow-tags origin $master

echo "Git push origin $master"
echo "Release finished.--push tag to remote finished"