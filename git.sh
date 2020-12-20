commit_message=`grep "##" README.md|awk 'END{print}'|tr -d '#'`
branch=`git branch --show-current`
echo ${commit_message}

git add --all
git commit -m "${commit_message}"
git push origin $branch