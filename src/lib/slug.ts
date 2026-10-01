export function slugify(value: string) {
  return value.trim().toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function postSlug(id: string, explicitSlug?: string) {
  return explicitSlug || id.replace(/^\d+-/, '');
}
