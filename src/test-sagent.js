const sagent = require('superagent')
const URI = 'http://localhost:3000/fruits.json'

const callback = (err, res) => console.log(res.body.fruits)

const getJSON = async uri => {
  const item = await sagent
    .get(URI)
    //    .get(URI)
    .then(res => res.body)
    .then(json => json.fruits)
  //    .then(console.log)
  //    .catch(e => console.log(e))
}
console.log(item)

console.log(getJSON(URI))
