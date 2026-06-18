import { tipPosts } from '../data/tips';
import { triedPosts } from '../data/tried';
import { toolEntries } from '../data/tools';

export interface ArticleRef {
  title: string;
  href: string;
  section: 'tips' | 'tried' | 'tools';
  tags: string[];
  date?: string;
}

export function getAllArticles(): ArticleRef[] {
  const tips: ArticleRef[] = tipPosts.map(p => ({
    title: p.title, href: p.href, section: 'tips', tags: p.tags, date: p.date,
  }));
  const tried: ArticleRef[] = triedPosts.map(p => ({
    title: p.title, href: p.href, section: 'tried', tags: p.tags, date: p.date,
  }));
  const tools: ArticleRef[] = toolEntries.map(t => ({
    title: t.title, href: t.href, section: 'tools', tags: t.tags,
  }));
  return [...tips, ...tried, ...tools];
}

export function getArticlesByTag(tagId: string): ArticleRef[] {
  return getAllArticles().filter(a => a.tags.includes(tagId));
}

export function getRelatedArticles(currentHref: string, currentTags: string[], limit = 5): ArticleRef[] {
  const all = getAllArticles().filter(a => a.href !== currentHref);
  const scored = all.map(a => ({
    ...a,
    score: a.tags.filter(t => currentTags.includes(t)).length,
  }));
  return scored
    .filter(a => a.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
