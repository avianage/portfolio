echo "Switching to branch main"
git checkout main

echo "Building App..."
npm run build

echo "Deploying Files to Server"
scp -r build/* avianage@192.168.0.121:/var/www/192.168.0.121/

echo "Done!!"