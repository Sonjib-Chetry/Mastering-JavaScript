function convertHTML(str) {
  // Object mapping special chars to their HTML entities
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  // Replace using regex and lookup table
  return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}
