// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
// Examples:
// "http://github.com/carbonfive/raygun" returns "github"
// "http://www.zombie-bites.com"  returns "zombie-bites" 
// "https://www.cnet.com"  returns "cnet"
export function domainName(url: string){
    return url.replace(/(^\w+:|^)\/\//, '')
            .replace('www.', '')
            .split('.')[0];
  }

export function domainNameV1(url: string){
    let domain = url.replace(/(^\w+:|^)\/\//, '');
    domain = domain.replace('www.', '');
    domain = domain.split('.')[0];
    return domain;
  }