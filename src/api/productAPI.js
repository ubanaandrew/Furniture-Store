import axios from 'axios';

// get products list
export const productAPI = async () => {
    const data = await axios.get('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=8');
    let newData = data.data.data.products;
    return newData;
};
