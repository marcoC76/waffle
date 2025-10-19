# Read the file content
$content = Get-Content -Path "c:\Users\mrkni\OneDrive\Documentos\GitHub\waffle\seguridad2.md" -Raw

# Remove all style blocks using regex
$cleanContent = $content -replace '(?s)<style scoped>.*?<\/style>\s*', ''

# Save the cleaned content back to the file
$cleanContent | Set-Content -Path "c:\Users\mrkni\OneDrive\Documentos\GitHub\waffle\seguridad2.md" -NoNewline
