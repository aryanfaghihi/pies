import axios from 'axios';

async function getPiesOfTheDay(pageNumber) {
  try {
    const response = await axios.get(`https://pie.now.sh/stores?_embed=pies&_page=${pageNumber}&_limit=5`);
    return processResults(response.data);
  } catch (error) {
    console.error(error);
  }
}

// This will find the pie of the day from the list and add it as a
// new attribute (pie) to the store objects
function processResults(data) {
  data.forEach((store, i) => {
    let pieOfTheDayIndex = 0;
    store.pies.forEach((pie, i) => {
      if (pie.isPieOfTheDay) pieOfTheDayIndex = i;
    });
    data[i] = {
      ...store,
      pie: store.pies[pieOfTheDayIndex]
    }
  });
  return data;
}

export default getPiesOfTheDay;