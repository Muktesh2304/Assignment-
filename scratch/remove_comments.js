const fs = require('fs');
const path = require('path');

function removeComments(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = [];
    let i = 0;
    const n = content.length;
    let state = 'NORMAL';

    while (i < n) {
        const char = content[i];
        const nextChar = i + 1 < n ? content[i + 1] : '';
        const nextTwo = content.slice(i, i + 2);

        if (state === 'NORMAL') {
            // Check for JSX Comments: {/* ... */}
            if (content.slice(i).startsWith('{/*')) {
                const idx = content.indexOf('*/}', i);
                if (idx !== -1) {
                    i = idx + 3;
                    continue;
                }
            }

            if (nextTwo === '//') {
                state = 'COMMENT_SINGLE';
                i += 2;
                continue;
            } else if (nextTwo === '/*') {
                state = 'COMMENT_BLOCK';
                i += 2;
                continue;
            } else if (char === '"') {
                state = 'STRING_DOUBLE';
                result.push(char);
                i += 1;
                continue;
            } else if (char === "'") {
                state = 'STRING_SINGLE';
                result.push(char);
                i += 1;
                continue;
            } else if (char === '`') {
                state = 'STRING_TEMPLATE';
                result.push(char);
                i += 1;
                continue;
            } else {
                result.push(char);
                i += 1;
                continue;
            }
        } else if (state === 'STRING_DOUBLE') {
            if (char === '\\') {
                result.push(char);
                if (i + 1 < n) {
                    result.push(content[i + 1]);
                }
                i += 2;
                continue;
            } else if (char === '"') {
                state = 'NORMAL';
                result.push(char);
                i += 1;
                continue;
            } else {
                result.push(char);
                i += 1;
                continue;
            }
        } else if (state === 'STRING_SINGLE') {
            if (char === '\\') {
                result.push(char);
                if (i + 1 < n) {
                    result.push(content[i + 1]);
                }
                i += 2;
                continue;
            } else if (char === "'") {
                state = 'NORMAL';
                result.push(char);
                i += 1;
                continue;
            } else {
                result.push(char);
                i += 1;
                continue;
            }
        } else if (state === 'STRING_TEMPLATE') {
            if (char === '\\') {
                result.push(char);
                if (i + 1 < n) {
                    result.push(content[i + 1]);
                }
                i += 2;
                continue;
            } else if (char === '`') {
                state = 'NORMAL';
                result.push(char);
                i += 1;
                continue;
            } else {
                result.push(char);
                i += 1;
                continue;
            }
        } else if (state === 'COMMENT_SINGLE') {
            if (char === '\n') {
                state = 'NORMAL';
                result.push(char);
                i += 1;
                continue;
            } else {
                i += 1;
                continue;
            }
        } else if (state === 'COMMENT_BLOCK') {
            if (nextTwo === '*/') {
                state = 'NORMAL';
                i += 2;
                continue;
            } else {
                i += 1;
                continue;
            }
        }
    }

    const cleanedContent = result.join('');
    if (cleanedContent !== content) {
        fs.writeFileSync(filePath, cleanedContent, 'utf8');
        console.log(`Cleaned comments from: ${filePath}`);
    }
}

function walkDir(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else if (/\.(js|jsx|ts|tsx|css)$/.test(file)) {
            removeComments(fullPath);
        }
    });
}

const componentsDir = 'd:/Assignment/one_eight/src/Components';
const appDir = 'd:/Assignment/one_eight/src/app';

if (fs.existsSync(componentsDir)) walkDir(componentsDir);
if (fs.existsSync(appDir)) walkDir(appDir);

console.log('Done removing all comments!');
