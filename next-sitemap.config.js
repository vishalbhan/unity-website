const siteUrl = "https://unity-bank.vercel.app";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
    ],
  },
};