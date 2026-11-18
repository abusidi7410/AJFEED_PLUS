export function isNonEmpty(value: string, minimum = 2): boolean {
  return value.trim().length >= minimum;
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

export function isValidQuantity(value: string): boolean {
  if (!value.trim()) return true;
  return value.trim().length >= 1 && value.trim().length <= 80;
}
