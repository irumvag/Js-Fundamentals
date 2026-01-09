function domainName(url){
  if(url=="") return "";
  url=url.replace('https://','');
  url=url.replace('http://','');
  url=url.replace('www','')
  return url.split('.')[0];
}
console.log(domainName("http://google.com"), "google");
// console.log(domainName("http://google.co.jp"), "google");
// console.log(domainName("www.xakep.ru"), "xakep");
// console.log(domainName("https://youtube.com"), "youtube");