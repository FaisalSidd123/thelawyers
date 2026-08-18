export default function sitemap() {
  const baseUrl = "https://thelawyers.com.pk";

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/insights`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/company-registration-compliance`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/company-registration`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/income-tax-filing`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/sales-tax-registration`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/sales-tax-filing`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/ntn-registration`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/food-license`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/ngo-npo-trust-registration`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/pseb-registration`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/psw-registration`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/pasha-registration`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/call-centre-registration`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/chamber-of-commerce-registration`, priority: 0.8, changeFrequency: "monthly" },
  ];

  return staticPages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
