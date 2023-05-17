import puppeteer from 'puppeteer';

async function scrapeDynamicPage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the dynamic page
  await page.goto('https://www.amazon.in/Boult-Audio-Curve-Sweatproof-Headphones/dp/B07LG59NPV/ref=sr_1_6?_encoding=UTF8&_ref=dlx_gate_sd_dcl_tlt_046ce644_dt&content-id=amzn1.sym.9e4ae409-2145-4395-aa6e-45d7f3e95c3e&m=A14CZOWI0VEHLG&pd_rd_r=30d1a0a5-e290-4a44-ba09-35e4ed045493&pd_rd_w=Ppcau&pd_rd_wg=UTkIc&pf_rd_p=9e4ae409-2145-4395-aa6e-45d7f3e95c3e&pf_rd_r=R9WDN6MNN60ECZHTP5X2&qid=1684335169&refinements=p_6%3AA14CZOWI0VEHLG&sr=8-6&th=1');

  // Wait for the dynamic content to load

  // Get the updated HTML content
  const htmlContent = await page.content();

  // Process the HTML content as needed
  // ...

  console.log(htmlContent);


  await browser.close();
}

// Run the scraping function
scrapeDynamicPage();