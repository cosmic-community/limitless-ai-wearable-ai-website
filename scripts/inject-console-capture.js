const fs = require('fs');
const path = require('path');

const buildDir = path.join(process.cwd(), '.next');

function injectScript(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if script is already injected
  if (content.includes('dashboard-console-capture.js')) return;
  
  // Inject script tag before closing head tag
  const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
  
  if (content.includes('</head>')) {
    content = content.replace('</head>', `${scriptTag}</head>`);
    fs.writeFileSync(filePath, content);
    console.log(`✅ Injected console capture script into ${filePath}`);
  }
}

function walkDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

// Start injection
console.log('🔄 Starting console capture script injection...');
walkDirectory(buildDir);
console.log('✅ Console capture script injection complete');