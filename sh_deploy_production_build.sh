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

#aws s3 sync ./ s3://wwwmetaforestkr
#aws cloudfront create-invalidation --distribution-id XXXXXXXXXXX --paths "/*" --profile mfdeployer

aws s3 sync ../www_mf_production_$DATE s3://wwwmetaforestus --delete --profile mfdeployer
aws cloudfront create-invalidation --distribution-id E2TR5EXK2V2I52 --paths "/*" --profile mfdeployer

git tag www_mf_production_$DATE\_$NAME
git push origin www_mf_production_$DATE\_$NAME

echo www_mf_production_$DATE\_$NAME

echo ''

