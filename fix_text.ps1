$file = "src\data\articles.js"
$content = [System.IO.File]::ReadAllText((Resolve-Path $file), [System.Text.Encoding]::UTF8)

# 1. Replace full "Contact + IP Team WhatsApp" combo links
$content = $content.Replace('[Contact The Lawyers Today](/contact) or [Contact us on Whasapp](https://wa.me/923073685421)', '[Chat on WhatsApp](https://wa.me/923073685421)')

# 2. Replace full "Contact + Legal Team WhatsApp" combo links
$content = $content.Replace('[Contact The Lawyers Today](/contact) or [Chat with Our Legal Team on WhatsApp](https://wa.me/923073685421)', '[Chat on WhatsApp](https://wa.me/923073685421)')

# 3. Replace "Our IP Team on WhatsApp" text (handles emoji and non-emoji versions)
$content = $content.Replace('Chat with Our IP Team on WhatsApp', 'Chat on WhatsApp')

# 4. Replace "Our Legal Team on WhatsApp" text (handles emoji and non-emoji versions)
$content = $content.Replace('Chat with Our Legal Team on WhatsApp', 'Chat on WhatsApp')

# 5. Replace heading static tags
$content = $content.Replace('### [Contact The Lawyers Today] or [Chat on WhatsApp](https://wa.me/923073685421)', '### [Chat on WhatsApp](https://wa.me/923073685421)')
$content = $content.Replace('## [Contact The Lawyers Today] or [Chat on WhatsApp](https://wa.me/923073685421)', '## [Chat on WhatsApp](https://wa.me/923073685421)')

# 6. Replace bold inline "Contact The Lawyers today"
$content = $content.Replace('**Contact The Lawyers today** for a tailored advisory session.', '**Contact us on WhatsApp** for a tailored advisory session.')

[System.IO.File]::WriteAllText((Resolve-Path $file), $content, [System.Text.Encoding]::UTF8)
Write-Host "All replacements done successfully!"
