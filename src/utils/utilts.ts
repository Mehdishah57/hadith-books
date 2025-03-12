
export const parseTranslation = (text: string) => {
    const textMatch = text.match(/T Text:\s*---\s*([\s\S]*?)\s*---/);
    const footnoteMatch = text.match(/T Footnote:\s*---\s*([\s\S]*?)\s*---/);
    const pageNumberMatch = text.match(/T Page Number:\s*---\s*([\s\S]*?)\s*---/);
  
    return {
      text: textMatch ? textMatch[1].trim() : "",
      footnote: footnoteMatch ? footnoteMatch[1].trim() : "",
      pageNumber: pageNumberMatch ? pageNumberMatch[1].trim() : "",
    };
};
