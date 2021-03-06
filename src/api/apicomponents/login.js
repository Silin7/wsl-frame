import axios from 'axios'

let login = {
  apiLogin: function (params, cb) {
    axios.get('/login/get?name=' + params.name + '&password=' + params.password).then((res) => {
      cb(res)
    }).catch((error) => {
      return Promise.reject(error)
    })
  },
  apiLogin2: function (params, cb) {
    axios.post('/login/post', params).then((res) => {
      cb(res)
    }).catch((error) => {
      return Promise.reject(error)
    })
  }
}

export default login
