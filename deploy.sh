yarn build:local
sed -i -e 's/\/react-app-onlysky/https:\/\/storage.googleapis.com\/react-app-onlysky/g' build/index.html
