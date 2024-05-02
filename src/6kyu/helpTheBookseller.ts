export const stockList = (listOfArt:string[], listOfCat:string[]): string => {
    if (listOfArt.length === 0 || listOfCat.length === 0) return '';
    return listOfCat.map(category => {
      const quantity = listOfArt.reduce((acc, art) => art.startsWith(category) ? acc + +art.split(' ')[1] : acc, 0);
      return `(${category} : ${quantity})`;
    }).join(' - ')
  }

export const stockListV1 = (listOfArt: string[], listOfCat: string[]): string => {
    if (listOfArt.length === 0 || listOfCat.length === 0) return "";

    let categoryQuantity: {category: string, quantity: number }[] = listOfCat.map((category: string) => ({category, quantity: 0}));

    listOfArt.forEach((art: string) => {
        const [category, quantity] = art.split(' ');
        const index = categoryQuantity.findIndex((cat: {category: string, quantity: number}) => cat.category === category[0]);
        if (index === -1) return;
        categoryQuantity[index].quantity += parseInt(quantity);
    });

    return categoryQuantity.map((cat) => `(${cat.category} : ${cat.quantity})`).join(' - ');
}