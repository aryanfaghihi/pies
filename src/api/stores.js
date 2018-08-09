import axios from 'axios';

async function getPiesOfTheDay(pageNumber, searchText, sortOrder) {
  try {
    let API_Url = `https://pie.now.sh/pies?_expand=store&isPieOfTheDay=true&_limit=5&_page=${pageNumber}`;
    if (searchText) API_Url += `&displayName_like=${searchText}`;
    if (sortOrder) API_Url += `&_sort=price&_order=${sortOrder}`;
    const response = await axios.get(API_Url);
    return response.data
  } catch (error) {
    return error;
  }
}

export default getPiesOfTheDay;