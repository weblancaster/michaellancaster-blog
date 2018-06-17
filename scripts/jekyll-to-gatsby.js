const fs = require('fs');
const path = require('path');

const jekyllPostsDir = '../michaellancaster/_posts';
const gatsbyPostsDir = './src/pages/articles';

const getFilesName = () => {
  return fs.readdirSync(path.resolve(jekyllPostsDir), 'utf8');
};

const createPostsFolder = () => {
  const filesName = getFilesName();
  let formattedFileName;

  filesName.forEach((item) => {
    formattedFileName = item.substring(0, item.indexOf('.'));

    fs.mkdirSync(path.resolve(`${gatsbyPostsDir}/${formattedFileName}`));
  });
};

const writeMarkdownToFolder = () => {
  const filesName = getFilesName();
  let formattedFileName;
  let fileContent;

  filesName.forEach((item) => {
    formattedFileName = item.substring(0, item.indexOf('.'));

    fileContent = fs.readFileSync(path.resolve(`${jekyllPostsDir}/${item}`), 'utf-8');
    fs.writeFileSync(path.resolve(`${gatsbyPostsDir}/${formattedFileName}/index.md`), fileContent, 'utf-8');
  });
};

// writeMarkdownToFolder();
// createPostsFolder();