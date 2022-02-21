#!/bin/sh

echo ''
echo 'git pull 하는 중..'
git pull

echo ''
echo 'git push 를 하셨나요? (YES): '
read ANSWER1

if [ "$ANSWER1" != 'YES' ]; then
    echo 'Please git push first.'
    exit 1
fi

#az login

NAME=$(whoami)
DATE=$(date '+%Y%m%d_%H%M%S_%Z')

mkdir ../www_mf_production_$DATE
git archive --format=tar main -o ../www_mf_production_$DATE/www_mf_production_$DATE.tar

cd ../www_mf_production_$DATE
tar xvf ./www_mf_production_$DATE.tar
rm ./*.tar

echo www_mf_production_$DATE\_$NAME > ./website_version.txt

rm -rf ./.gitignore
rm -rf ./README.md
rm -rf ./sh_deploy_production_build.sh

# az storage blob delete-batch --account-name wwwmetaforestkr --source '$web'
# az storage blob upload-batch --destination "https://wwwmetaforestkr.blob.core.windows.net/\$web" --source ./

#aws s3 sync ./ s3://wwwmetaforestkr
#aws cloudfront create-invalidation --distribution-id XXXXXXXXXXX --paths "/*"

git tag www_mf_production_$DATE\_$NAME
git push origin www_mf_production_$DATE\_$NAME

echo www_mf_production_$DATE\_$NAME

echo ''

