const playwright = require('playwright-aws-lambda');
const { createHash } = require('crypto');
const fs = require('fs');

async function getOgImage(path, baseUrl = 'https://og-image.phiilu.com') {
  if (process.env.NODE_ENV === 'development') {
    return 'og image will be generated in production';
  }

  const url = `${baseUrl}${path}`;
  const hash = createHash('md5').update(url).digest('hex');
  const browser = await playwright.launchChromium({ headless: true });
  const imagePath = `./public/images/og/${hash}.png`;
  const publicPath = `${process.env.BASE_URL}/images/og/${hash}.png`;

  if (fs.existsSync(imagePath)) {
    return publicPath;
  }

  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto(url, { waitUntil: 'networkidle' });
  const buffer = await page.screenshot({ type: 'png' });
  await browser.close();

  fs.writeFileSync(imagePath, buffer);

  return publicPath;
}

export default getOgImage;
