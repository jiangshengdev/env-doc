import favicons from 'favicons';
import fs from 'fs/promises';
import path from 'path';

const src = './static/img/logo.svg'; // Icon source file path.
const dest = './favicons'; // Output directory path.
const htmlBasename = 'index.html'; // HTML file basename.

// Configuration (see above in the README file).
const configuration = {
  path: 'img/icons',
  appName: 'Environment Document',
  appShortName: 'Env Doc',
  appDescription: "会配环境，不求甚解",
  theme_color: '#25C2A0',
  background: '#FFFFFF',
  lang: 'zh-Hans',
  display: 'standalone',
  scope: './',
  start_url: './index.html',
};

// Below is the processing.
const response = await favicons(src, configuration);
await fs.mkdir(dest, {recursive: true});
await Promise.all(
  response.images.map(
    async (image) =>
      await fs.writeFile(path.join(dest, image.name), image.contents)
  )
);
await Promise.all(
  response.files.map(
    async (file) =>
      await fs.writeFile(path.join(dest, file.name), file.contents)
  )
);
await fs.writeFile(path.join(dest, htmlBasename), response.html.join('\n'));
