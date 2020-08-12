const fetch = require('node-fetch');
const urlencode = require('urlencode');
const htmlToText = require('html-to-text');
const encoding = require('encoding');

async function main(e, d) {
  let i;
  try {
    i = await fetch(`https://www.google.com/search?q=${urlencode(`${d} ${e}`)}+lyrics`);
    i = await i.textConverted();
    [, i] = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">');
    [i] = i.split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">');
  } catch (m) {
    try {
      i = await fetch(`https://www.google.com/search?q=${urlencode(`${d} ${e}`)}+song+lyrics`);
      i = await i.textConverted();
      [, i] = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">');
      [i] = i.split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">');
    } catch (n) {
      try {
        i = await fetch(`https://www.google.com/search?q=${urlencode(`${d} ${e}`)}+song`);
        i = await i.textConverted();
        [, i] = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">');
        [i] = i.split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">');
      } catch (o) {
        try {
          i = await fetch(`https://www.google.com/search?q=${urlencode(`${d} ${e}`)}`);
          i = await i.textConverted();
          [, i] = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">');
          [i] = i.split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">');
        } catch (p) {
          i = '';
        }
      }
    }
  }
  const ret = i.split('\n');
  let final = '';
  for (let j = 0; j < ret.length; j += 1) {
    final = `${final}${htmlToText.fromString(ret[j])}\n`;
  }
  return String(encoding.convert(final)).trim();
}
module.exports = main;
