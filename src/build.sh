cp -a ./ ../
rm ../build.sh
html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true ./index.html > ./index.min.html
mv ./index.min.html ../index.html
html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true ./main.css > ./main.min.css
mv ./main.min.css ../main.css
uglifyjs --compress -- ./js/main.js > ../js/main.js