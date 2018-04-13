let houses = []
let id = 0;

module.exports = {
  getHouses: (req, res, next) => {
    const dbInstance = req.app.get('db')

    dbInstance.read_houses()
    .then( houses => res.status(200).send(houses) )
    .catch( () => res.status(500).send(console.error()))
  },
  postHouse: (req, res, next) => {
    const dbInstance = req.app.get('db')
    
    dbInstance.create_house()
    .then( () => res.status(200).send() )
    .catch( () => res.status(500).send() )
  },
  deleteHouse: (req, res, next) => {
    const dbInstance = req.app.get('db')

    dbInstance.delete_house()
    .then( () => res.status(200).send() )
    .catch( () => res.status(500).send())
  }
}