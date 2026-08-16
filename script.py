import sys

file_path = 'c:/Users/user/OneDrive/Desktop/lawyers/thelawyers/src/app/about/page.js'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if 'Core Divisions' in line:
        start_idx = i - 2
        break

for i in range(start_idx, len(lines)):
    if 'Why Choose "The Lawyers"?' in lines[i]:
        end_idx = i - 5
        break

if start_idx != -1 and end_idx != -1:
    del lines[start_idx:end_idx]
    
    replacement = '''            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold text-brand-burgundy uppercase tracking-widest">
                Our Legal Services
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-brand-navy mt-2 mb-8">
                Explore Our Comprehensive Legal Services
              </h2>
              <Link
                href="/company-registration-compliance"
                className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-burgundy text-brand-paper py-4 px-8 rounded-sm text-sm font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                Explore All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>\n'''
    
    lines.insert(start_idx, replacement)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('Successfully replaced Core Divisions.')
else:
    print(f'Could not find. start_idx: {start_idx}, end_idx: {end_idx}')
