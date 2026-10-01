const aliases: Record<string, string> = {
  'मेष': 'mesh', 'वृषभ': 'vrishabh', 'मिथुन': 'mithun', 'कर्क': 'kark',
  'सिंह': 'singh', 'कन्या': 'kanya', 'तुला': 'tula', 'वृश्चिक': 'vrishchik',
  'धनु': 'dhanu', 'मकर': 'makar', 'कुंभ': 'kumbh', 'मीन': 'meen',
  'राशिफल': 'rashifal', 'दैनिक राशिफल': 'daily-rashifal', 'ज्योतिष': 'jyotish',
  'ग्रह': 'grah', 'गोचर': 'gochar', 'कुंडली': 'kundli', 'शनि': 'shani', '2026': '2026',
};

export function slugify(value: string) {
  const trimmed = value.trim().toLowerCase();
  if (aliases[trimmed]) return aliases[trimmed];
  return trimmed.normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

export function postSlug(id: string, explicitSlug?: string) {
  return explicitSlug || id.replace(/^\d+-/, '');
}
