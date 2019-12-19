module.exports = {
    // getInventory: (req, res) => {

    // },

    addInventory: (req, res) => {
        console.log(req.app.get('db').inventory)
        const db = req.app.get('db')
        const {item_name, item_desc, item_count} = req.body

        db.addItem([item_name, item_desc, item_count])
            .then(response => res.status(200).json(response))
            .catch(err => {
                console.log('Could not post new data', req.body)
                res.sendStatus(500)
            })
    }
}