export const encryptThis = (str: string): string => {
  return str.split(' ').map((letter:string): string=>{
    if(letter=='') return '';
    let n:number=letter.length;
    if(n==1) return letter.charCodeAt(0).toString();
    if(n==2) return letter.charCodeAt(0)+letter[1];
    return letter.charCodeAt(0)+letter[n-1]+letter.slice(2,n-1)+letter[1];
    }).join(' ')
}