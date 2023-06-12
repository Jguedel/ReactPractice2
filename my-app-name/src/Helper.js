
export const choice = (items) => {
    // console.log(items);
    const index = Math.floor(Math.random() * items.length);
    return items[index]
}
export const remove = (items, item) => {
    console.log(items);
    console.log(item);
    const index = items.indexOf(item)
    let newArr = items.slice(index)
    return newArr
}
  
