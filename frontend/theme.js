const fs = require('fs');

function replaceClass(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Backgrounds
  content = content.replace(/bg-\[\#030712\]/g, 'bg-[#fafafa] dark:bg-[#030712]');
  content = content.replace(/bg-\[\#0a0a0c\]/g, 'bg-white dark:bg-[#0a0a0c]');
  content = content.replace(/bg-\[\#0a0f1e\]/g, 'bg-white dark:bg-[#0a0f1e]');
  content = content.replace(/bg-\[\#0c0c0e\]\/90/g, 'bg-white/90 dark:bg-[#0c0c0e]/90');
  content = content.replace(/bg-\[\#18181b\]/g, 'bg-gray-100 dark:bg-[#18181b]');
  content = content.replace(/bg-\[\#27272a\]/g, 'bg-gray-200 dark:bg-[#27272a]');
  content = content.replace(/bg-white\/5( |"|\||\]|\})/g, 'bg-black/5 dark:bg-white/5$1');
  
  // Text colors
  content = content.replace(/text-white/g, 'text-gray-900 dark:text-white');
  content = content.replace(/text-gray-300/g, 'text-gray-700 dark:text-gray-300');
  content = content.replace(/text-gray-400/g, 'text-gray-600 dark:text-gray-400');
  content = content.replace(/text-gray-500/g, 'text-gray-500 dark:text-gray-400');
  content = content.replace(/text-gray-200/g, 'text-gray-800 dark:text-gray-200');

  // Borders
  content = content.replace(/border-white\/10/g, 'border-black/10 dark:border-white/10');
  content = content.replace(/border-white\/5( |"|\||\]|\})/g, 'border-black/5 dark:border-white/5$1');
  content = content.replace(/border-white\/20/g, 'border-black/20 dark:border-white/20');

  // Fix known button text issues that shouldn't be dark-mode inverted
  content = content.replace(/text-gray-900 dark:text-white font-bold tracking-wide/g, 'text-white font-bold tracking-wide');
  
  // Fix button backgrounds that were 'bg-white text-black' inside dark mode projects list
  content = content.replace(/bg-white text-black/g, 'bg-gray-900 dark:bg-white text-white dark:text-black');

  // Write changes
  fs.writeFileSync(filePath, content);
}

const files = [
  'App.jsx',
  'pages/About.jsx',
  'pages/Contact.jsx',
  'pages/Home.jsx',
  'pages/Projects.jsx',
  'pages/Skills.jsx',
  'components/Footer.jsx'
];

files.forEach(file => replaceClass('src/' + file));
console.log('Light Mode migration script completed.');
