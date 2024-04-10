const BASE_URL = window.location.origin || 'https://unity-bank.vercel.app';

function generateSiteMap(pages, posts, categories) {
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${`${BASE_URL}`}</loc>
      </url>
      ${pages
        .map((page) => {
          return `
            <url>
                <loc>${`${BASE_URL}/${page.data.url}`}</loc>
            </url>
          `;
        })
        .join('')}
      <url>
        <loc>${`${BASE_URL}/blog`}</loc>
      </url>
      ${posts.results
        .map((post) => {
          return `
            <url>
                <loc>${`${BASE_URL}/blog/${post.data.slug}`}</loc>
            </url>
          `;
        })
        .join('')}
      ${categories
        .map((category) => {
          return `
            <url>
                <loc>${`${BASE_URL}/blog/category/${category}`}</loc>
            </url>
          `;
        })
        .join('')}
    </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const pages = await fetch('https://cdn.builder.io/api/v2/content/page?apiKey=21b44296fc364461abc19d1d5fa5792d&fields=data.url&query.data.includeInSitemap.$ne=false').then(res => res.json());
  const posts = await fetch('https://cdn.builder.io/api/v3/content/blog-articles?apiKey=21b44296fc364461abc19d1d5fa5792d&limit=0&fields=data.slug,data.primaryCategory').then(res => res.json());
  const categories = [...new Set(posts.results.map(post => post.data.primaryCategory))];

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(pages, posts, categories);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;