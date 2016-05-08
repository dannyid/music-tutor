const ajax = {
  query(url) {
    return $.ajax({
      url: url,
      type: 'GET'
    });
  }
};

export const fetchCustomerList = (owner) => {
  return ajax.query('https://www.google.com');
};

export default ajax;
