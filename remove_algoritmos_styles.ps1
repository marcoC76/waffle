# Read the content of the file
$content = Get-Content -Path "c:\Users\mrkni\OneDrive\Documentos\GitHub\waffle\algoritmos2.md" -Raw

# Remove all style blocks using regex
$cleanContent = $content -replace '(?s)<style scoped>.*?<\/style>\s*', ''

# Save the cleaned content back to the file
$cleanContent | Set-Content -Path "c:\Users\mrkni\OneDrive\Documentos\GitHub\waffle\algoritmos2.md" -NoNewline
