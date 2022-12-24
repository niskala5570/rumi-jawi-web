var rjtambahan = "aira	اٴيرا\nairaha	اٴيراها\nakatsuki	اکاتسوکي\nbart	بارت\neleina	ايريئينا\nfran	فرن\nhakurei	هاکوري\nhatsune	هاتسوني\nireina	ايريئينا\nisla	اٴيرا\nkaneki	کانيکي\nkazuhiko	کازوهيکو\nkazuki	کازوکي\nken	کين\nmende	مندى\nmiko	ميکو\nmiku	ميکو\nreimu	ريئيمو\nrudeus	روديوس\nscarlet	سکرلت\ntu	تو\nvictor	ۏيکتور\nye	ي\nyae	ياٴي\nlinux	لينيک‌س\nlinus	لاينس";

rjtambahan.split("\n").forEach(function (line) {
  let parts = line.split("\t");
  let rumi = parts[0];
  let normRumi = rumi.toLowerCase();
  let jawi = parts[1];
  if (!rjmap.has(normRumi)) rjmap.set(normRumi, []);
  rjmap.get(normRumi).push(jawi);
  if (!jrmap.has(jawi)) jrmap.set(jawi, []);
  jrmap.get(jawi).push(rumi);
})