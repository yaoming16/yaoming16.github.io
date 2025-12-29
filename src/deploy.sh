#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git config user.name "Deploy Bot"
git config user.email "deploy@github.com"
git checkout -B gh-pages
git add -A
git commit --allow-empty -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f https://github.com/yaoming16/yaoming16.github.io.git gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -