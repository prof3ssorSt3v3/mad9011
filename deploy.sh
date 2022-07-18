#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# Upload the whole site to the private personal repo
git branch -M f2022
git pull origin f2022
git add -A 
git commit -m 'course update'
# REPLACE NEXT LINE with your own private repo link
git push -f git@github.com:prof3ssorSt3v3/mad9011.git f2022
#               git@github.com:<username>/<repo>.git 

# Upload the public github.io coursebook version
# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy dist from private to public'
git branch -M main
# REPLACE NEXT LINE with public link for coursebook repo
git push -f git@github.com:MAD9011/f2022.git main

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:prof3ssorSt3v3/mad9014.git master:gh-pages
# if you are deploying to https://<ORG>.github.io/<REPO>
# git push -f git@github.com:<ORG>/<REPO>.git master

cd -

