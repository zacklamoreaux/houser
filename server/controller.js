let houses = []
let id = 0;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses)
  },
  postHouse: (req, res) => {
    const { name, address, city, state, zipcode } = req.body
    houses.push({ id, name, address, city, state, zipcode})
    id++
    res.status(200).send(houses)
  },
  deleteHouse: (req, res) => {
    const deleteID = req.params.id
    const houseIndex = houses.findIndex( house => house.id == deleteID)
    houses.splice(houseIndex, 1)
    res.status(200).send(houses)
  }
}