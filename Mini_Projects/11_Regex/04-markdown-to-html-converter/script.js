
// Define globally accessible function
function convertMarkdown(markdown) {
  // Support no-arg invocation (reads from #markdown-input)
  if (typeof markdown === 'undefined') {
    if (typeof document !== 'undefined') {
      const inputEl = document.getElementById('markdown-input');
      markdown = inputEl ? inputEl.value : '';
    } else {
      markdown = '';
    }
  }
  if (!markdown) return '';

  const lines = markdown.split('\n');
  let html = '';

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Header (levels 1–6)
    const header = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (header) {
      const level = header[1].length;
      const content = convertInlineMarkdown(header[2].trim());
      html += `<h${level}>${content}</h${level}>`;
      continue;
    }

    // Blockquote
    const quote = trimmed.match(/^>\s+(.+)$/);
    if (quote) {
      const content = convertInlineMarkdown(quote[1].trim());
      html += `<blockquote>${content}</blockquote>`;
      continue;
    }

    // Standalone inline elements
    html += convertInlineMarkdown(trimmed);
  }

  return html.trim();
}

// Inline formatting helper
function convertInlineMarkdown(text) {
  let result = text;

  // Images
  result = result.replace(/!\[([^\]]+?)\]\(([^)]+?)\)/g, '<img alt="$1" src="$2">');

  // Links
  result = result.replace(/\[([^\]]+?)\]\(([^)]+?)\)/g, '<a href="$2">$1</a>');

  // Bold (** or __) - greedy to capture nested italics correctly
  result = result.replace(/\*\*(.+)\*\*/g, '<strong>$1</strong>')
                 .replace(/__(.+)__/g, '<strong>$1</strong>');

  // Italic (* or _)
  result = result.replace(/\*(.+?)\*/g, '<em>$1</em>')
                 .replace(/_(.+?)_/g, '<em>$1</em>');

  return result;
}

// DOM integration
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('markdown-input');
    const out = document.getElementById('html-output');
    const preview = document.getElementById('preview');
    const update = () => {
      const rendered = convertMarkdown(input.value);
      out.textContent = rendered;
      preview.innerHTML = rendered;
    };
    input.addEventListener('input', update);
    update();
  });
}
