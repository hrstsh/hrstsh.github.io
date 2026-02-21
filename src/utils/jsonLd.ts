/**
 * JSON-LD スキーマ生成ユーティリティ（SEO対策）
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */

const SITE = 'https://hrstsh.com';

/** YYYY.MM 形式を ISO 8601 に変換（月初日） */
export function toIsoDate(ym: string): string {
  const [y, m] = ym.split('.');
  if (y && m) {
    return `${y}-${m.padStart(2, '0')}-01`;
  }
  return new Date().toISOString().slice(0, 10);
}

export function webSite(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    description,
    url: SITE,
    inLanguage: 'ja',
  };
}

export function organization(name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url: SITE,
  };
}

export function webPage(
  name: string,
  description: string | undefined,
  url: string,
  breadcrumbs?: { name: string; url: string }[]
) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    url,
    inLanguage: 'ja',
  };
  if (description) schema.description = description;
  if (breadcrumbs?.length) {
    schema.breadcrumb = breadcrumbList(breadcrumbs);
  }
  return schema;
}

export function article(
  headline: string,
  description: string | undefined,
  url: string,
  datePublished: string,
  dateModified?: string,
  breadcrumbs?: { name: string; url: string }[]
) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    url,
    datePublished,
    author: { '@type': 'Person', name: 'hrstsh' },
    publisher: { '@type': 'Organization', name: 'hrの備忘録', url: SITE },
    inLanguage: 'ja',
  };
  if (description) schema.description = description;
  if (dateModified) schema.dateModified = dateModified;
  if (breadcrumbs?.length) {
    schema.breadcrumb = breadcrumbList(breadcrumbs);
  }
  return schema;
}

export function breadcrumbList(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : new URL(item.url, SITE).href,
    })),
  };
}

export function itemList(
  name: string,
  description: string | undefined,
  url: string,
  items: { name: string; url: string }[]
) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    url,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : new URL(item.url, SITE).href,
    })),
  };
  if (description) schema.description = description;
  return schema;
}

/** Tips/Tried 記事用の Article スキーマ（パスから自動で URL・パンくずを生成） */
export function tipArticle(
  headline: string,
  description: string | undefined,
  path: string,
  datePublished: string,
  category: 'tips' | 'tried'
) {
  const url = path.startsWith('http') ? path : new URL(path, SITE).href;
  const breadcrumbs =
    category === 'tips'
      ? [{ name: 'トップ', url: '/' }, { name: 'Tips', url: '/tips' }, { name: headline, url: path }]
      : [{ name: 'トップ', url: '/' }, { name: 'やってみた', url: '/tried' }, { name: headline, url: path }];
  return article(headline, description, url, datePublished, undefined, breadcrumbs);
}

/** FAQ スキーマ（AI検索・引用向け） */
export function faqPage(
  questions: { question: string; answer: string }[],
  url: string
) {
  const fullUrl = url.startsWith('http') ? url : new URL(url, SITE).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
    url: fullUrl,
  };
}

export function webApplication(
  name: string,
  description: string | undefined,
  url: string,
  applicationCategory = 'UtilitiesApplication'
) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    url,
    applicationCategory,
    inLanguage: 'ja',
  };
  if (description) schema.description = description;
  return schema;
}
