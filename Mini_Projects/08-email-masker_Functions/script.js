



function maskEmail(email) {
  const atIndex = email.indexOf('@');
  console.log(atIndex);
  const localPart = email.slice(0, atIndex);
  console.log(localPart);
  const domain = email.slice(atIndex);
  console.log(domain);

  if (localPart.length <= 2) {
    // If local part is too short, return as it is
    return localPart + domain;
  }

  const firstChar = localPart[0];
  console.log(firstChar);
  const lastChar = localPart[localPart.length - 1];
  console.log(lastChar);
  const masked = '*'.repeat(localPart.length - 2);
  console.log(masked);

  return firstChar + masked + lastChar + domain;
}

console.log(maskEmail("sanjeevkarkichetry@gmail.com"));