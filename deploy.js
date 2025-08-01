import ghpages from 'gh-pages';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Publish the 'dist' folder to gh-pages branch
ghpages.publish(`${__dirname}/dist`, (err) => {
  if (err) {
    console.error('Deployment failed:', err);
  } else {
    console.log('Site deployed successfully!');
  }
});
