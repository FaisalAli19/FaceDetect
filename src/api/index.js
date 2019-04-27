let url = null;

if (process.env.NODE_ENV === 'production') {
  url = 'https://face-detect-backend.herokuapp.com';
} else {
  url = 'http://localhost:5000';
}

export default url;
