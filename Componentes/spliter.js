
export function parseXmlNoticias(xml) {

  const regex = /<entry>.*?<\/entry>/gs;
  const entries = xml.match(regex);
  const news = entries.map((entry,i) => {

    const idRegex = /<id>(.*?)<\/id>/s;
    const titleRegex = /<title .*?>(.*?)<\/title>/s;
    const imagemRegex = /<media:thumbnail[^>]*url="([^"]*\/s72-c\/[^"]*)"[^>]*>/;
    const contentRegex = /<content.*?>(.*?)<\/content>/s;
    const linkRegex = /https:\/\/www\.jornaloaperitivo\.com\.br(.*?)".*?\/>/
   
    const id = entry.match(idRegex)==null ? i : entry.match(idRegex)[1];
    const title = entry.match(titleRegex)==null ? "indice "+i : entry.match(titleRegex)[1];
    let  image = entry.match(imagemRegex)==null ? "sem image/s72-c/" : entry.match(imagemRegex)[1];
    image = image.replace('/s72-c/', '/s1600/');
    const content = entry.match(contentRegex)==null ? "Corpo "+i : entry.match(contentRegex)[1];
    let link = entry.match(linkRegex)==null ? i : entry.match(linkRegex);
    link = link[0].split("\" ")[0];
    
    return {
      id,
      title,
      image,
      content,
      link
    };
  });
  


  return news;
}

export function parseXmlCategorias(xml) {

  const regex = /<category term="(.*?)"\/>/gs;
  
  const entries = xml.match(regex);

  const ent = entries.map((entry,i) => {
    let categoria =  entry.split(`"`)[1];
    return {
      i,
      categoria,
    };
  });

  return ent;
}

export default parseXmlNoticias

