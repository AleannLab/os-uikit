yarn build:local
sed -i -e 's/\/react-app-onlysky/https:\/\/storage.cloud.google.com\/react-app-onlysky/g' build/index.html
