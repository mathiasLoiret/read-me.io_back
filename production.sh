if [ -d "dist/" ]; then
  rm -rf dist/
fi
mkdir dist
cp index.js dist/index.js
cp package.json dist/package.json
cp -r public dist/public
cp -r src dist/src
