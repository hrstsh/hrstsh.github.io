export interface Tag {
  id: string;
  label: string;
  group: 'platform' | 'method';
}

export const tags: Tag[] = [
  { id: 'twitter',          label: 'X (Twitter)', group: 'platform' },
  { id: 'youtube',          label: 'YouTube',     group: 'platform' },
  { id: 'macos',            label: 'macOS',       group: 'platform' },
  { id: 'chrome',           label: 'Chrome',      group: 'platform' },
  { id: 'github',           label: 'GitHub',      group: 'platform' },
  { id: 'bookmarklet',      label: 'ブックマークレット', group: 'method' },
  { id: 'chrome-extension', label: 'Chrome 拡張',        group: 'method' },
  { id: 'cli',              label: 'コマンド / CLI',     group: 'method' },
  { id: 'automation',       label: '自動化',             group: 'method' },
  { id: 'dev',              label: '開発',               group: 'method' },
];

export function getTag(id: string): Tag | undefined {
  return tags.find(t => t.id === id);
}

export function getTagsByGroup(group: Tag['group']): Tag[] {
  return tags.filter(t => t.group === group);
}
