#!/usr/bin/env sh

set -e

vite build

cd docs
echo "piesam.com" > CNAME

cd ../

git add .
git commit -m "build and deploy"
git push -u origin main