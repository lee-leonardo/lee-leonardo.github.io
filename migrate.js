import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.resolve(__dirname, "../_posts");
const DEST_DIR = path.resolve(__dirname, "src/content/blog");

// Ensure destination exists
if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

console.log(`Reading from: ${SOURCE_DIR}`);
console.log(`Writing to: ${DEST_DIR}`);

// Simple YAML parser for Jekyll frontmatter
function parseFrontmatter(fmString) {
  const lines = fmString.split("\n");
  const data = {};

  // Helper to clean quotes
  const clean = (str) => {
    if (!str) return "";
    str = str.trim();
    if (
      (str.startsWith('"') && str.endsWith('"')) ||
      (str.startsWith("'") && str.endsWith("'"))
    ) {
      return str.slice(1, -1);
    }
    return str;
  };

  lines.forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) return;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Handle arrays like [item1, item2]
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value.slice(1, -1).split(",").map(clean).filter(Boolean);
      data[key] = value;
    } else {
      data[key] = clean(value);
    }
  });
  return data;
}

function transformContent(content) {
  // Remove excerpt separator
  content = content.replace(/<!--more-->/g, "");

  // Convert liquid highlight tags to backticks
  // {% highlight swift %} -> ```swift
  content = content.replace(/{% highlight ([a-zA-Z0-9_\-]+) %}/g, "```$1");
  content = content.replace(/{% endhighlight %}/g, "```");

  // Convert liquid raw tags (often used to escape heavy chars) - just remove them for now or assume content is safe
  content = content.replace(/{% raw %}/g, "");
  content = content.replace(/{% endraw %}/g, "");

  return content.trim();
}

const files = fs.readdirSync(SOURCE_DIR);

files.forEach((file) => {
  if (!file.endsWith(".md")) return;

  const sourcePath = path.join(SOURCE_DIR, file);
  const content = fs.readFileSync(sourcePath, "utf-8");

  // Split by first two ---
  // Note: This is fragile if --- appears elsewhere, but standard for Jekyll
  const parts = content.split(/^---$/m);

  if (parts.length < 3) {
    console.warn(`Skipping ${file}: No valid frontmatter found.`);
    return;
  }

  // parts[0] is empty (before first ---)
  // parts[1] is frontmatter
  // parts[2] is body (and parts[3+] if --- appeared in body, so join the rest)

  const frontmatterRaw = parts[1];
  const bodyRaw = parts.slice(2).join("---");

  const data = parseFrontmatter(frontmatterRaw);

  // Transform Metadata
  const newFm = {};

  // REQUIRED: title
  newFm.title = data.title || file.replace(/\.md$/, "");

  // REQUIRED: description
  // Use part of body if missing? Or just empty string.
  // Astro blog starter often requires description.
  newFm.description = data.description || `Article about ${newFm.title}`;

  // DATE
  // Try to extract from filename YYYY-MM-DD
  const filenameMatch = file.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/);
  let dateStr = data.date;
  let slug = file.replace(".md", "");

  if (filenameMatch) {
    if (!dateStr) dateStr = filenameMatch[1];
    slug = filenameMatch[2]; // Use slug from filename without date for cleaner URLs? Or keep date?
    // Astro uses filename as slug by default, so if we write as `slug.md`, that's the slug.
    // User asked to convert format. Let's keep original filename-based-slug but maybe remove date from filename itself if we utilize pubDate.
  }

  if (dateStr) {
    // Ensure valid date format for YAML or just quote it
    newFm.pubDate = new Date(dateStr).toISOString().split("T")[0];
  } else {
    newFm.pubDate = new Date().toISOString().split("T")[0];
  }

  // IMAGE
  newFm.heroImage = "../../assets/blog-placeholder-1.jpg"; // Default placeholder

  // Transform Content
  const newBody = transformContent(bodyRaw);

  // Reconstruct Frontmatter
  let output = "---\n";
  output += `title: "${newFm.title}"\n`;
  output += `description: "${newFm.description}"\n`;
  output += `pubDate: '${newFm.pubDate}'\n`;
  output += `heroImage: '${newFm.heroImage}'\n`;

  // Add original tags/categories if present
  if (data.tags) {
    // Ensure it's valid yaml list
    output += `tags:\n`;
    if (Array.isArray(data.tags)) {
      data.tags.forEach((t) => (output += `  - ${t}\n`));
    } else {
      output += `  - ${data.tags}\n`;
    }
  }
  if (data.categories) {
    output += `categories: [${Array.isArray(data.categories) ? data.categories.join(", ") : data.categories}]\n`;
  }

  output += "---\n\n";
  output += newBody;

  // Write file
  // Decide on filename: `slug.md` is better for Astro than `YYYY-MM-DD-slug.md` usually.
  // Let's use `slug.md`
  const destPath = path.join(DEST_DIR, `${slug}.md`);
  fs.writeFileSync(destPath, output);
  console.log(`Converted: ${file} -> ${slug}.md`);
});
