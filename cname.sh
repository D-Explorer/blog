# cname.sh
#!/user/bin/env sh

set -e

# CNAME 不能写成小写
echo 'blog.morethink.top' > docs/.vuepress/dist/CNAME 
