import os
import re

def remove_comments(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    result = []
    i = 0
    n = len(content)
    
    # State machine to remove comments
    # States: 'NORMAL', 'STRING_SINGLE', 'STRING_DOUBLE', 'STRING_TEMPLATE', 'COMMENT_SINGLE', 'COMMENT_BLOCK'
    state = 'NORMAL'
    
    while i < n:
        char = content[i]
        
        # Look ahead helpers
        next_char = content[i+1] if i + 1 < n else ''
        next_two = content[i:i+2]
        next_three = content[i:i+3]
        
        if state == 'NORMAL':
            # Check for JSX Comments: {/* ... */}
            if next_two == '{/':
                # Peek to see if it's indeed a JSX comment: { /* ... */ }
                # Let's search for the closing */ } or similar
                # To be simple and robust, we can check if it's `{/*`
                # But sometimes it has spaces: { /* ... */ }
                pass
                
            # We can check for standard JSX comment start: `{/*`
            if content[i:].startswith('{/*'):
                # Find matching `*/}`
                idx = content.find('*/}', i)
                if idx != -1:
                    i = idx + 3
                    continue
            
            # Standard comments
            if next_two == '//':
                state = 'COMMENT_SINGLE'
                i += 2
                continue
            elif next_two == '/*':
                state = 'COMMENT_BLOCK'
                i += 2
                continue
            elif char == '"':
                state = 'STRING_DOUBLE'
                result.append(char)
                i += 1
                continue
            elif char == "'":
                state = 'STRING_SINGLE'
                result.append(char)
                i += 1
                continue
            elif char == '`':
                state = 'STRING_TEMPLATE'
                result.append(char)
                i += 1
                continue
            else:
                result.append(char)
                i += 1
                continue
                
        elif state == 'STRING_DOUBLE':
            if char == '\\':
                result.append(char)
                if i + 1 < n:
                    result.append(content[i+1])
                i += 2
                continue
            elif char == '"':
                state = 'NORMAL'
                result.append(char)
                i += 1
                continue
            else:
                result.append(char)
                i += 1
                continue
                
        elif state == 'STRING_SINGLE':
            if char == '\\':
                result.append(char)
                if i + 1 < n:
                    result.append(content[i+1])
                i += 2
                continue
            elif char == "'":
                state = 'NORMAL'
                result.append(char)
                i += 1
                continue
            else:
                result.append(char)
                i += 1
                continue
                
        elif state == 'STRING_TEMPLATE':
            if char == '\\':
                result.append(char)
                if i + 1 < n:
                    result.append(content[i+1])
                i += 2
                continue
            elif char == '`':
                state = 'NORMAL'
                result.append(char)
                i += 1
                continue
            else:
                result.append(char)
                i += 1
                continue
                
        elif state == 'COMMENT_SINGLE':
            if char == '\n':
                state = 'NORMAL'
                result.append(char)
                i += 1
                continue
            else:
                i += 1
                continue
                
        elif state == 'COMMENT_BLOCK':
            if next_two == '*/':
                state = 'NORMAL'
                i += 2
                continue
            else:
                i += 1
                continue

    cleaned_content = "".join(result)
    
    # Also clean up any CSS comments if it's a CSS file
    if file_path.endswith('.css'):
        # CSS only has /* ... */ comments
        # The state machine handled it perfectly because /* and */ are general.
        pass
        
    # Write back if changed
    if cleaned_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        print(f"Cleaned comments from: {file_path}")

def process_dir(dir_path):
    for root, dirs, files in os.walk(dir_path):
        for file in files:
            if file.endswith(('.js', '.jsx', '.ts', '.tsx', '.css')):
                file_path = os.path.join(root, file)
                remove_comments(file_path)

if __name__ == "__main__":
    process_dir("d:/Assignment/one_eight/src/Components")
    process_dir("d:/Assignment/one_eight/src/app")
    print("Done removing all comments!")
