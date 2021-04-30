const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: 'a18a3032744a41b79a3497ab02fb15f8',
});

const handleApiCall = (req, res) => {
  app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
  .then(data => res.json(data)).catch(err => res.status(400).json('Unable to work with API'))
}

const handleImage = (req, res,db) => {
  const { id } = req.body;
  db('users')
    .where({ id })
    .increment('entries', 1)
    .returning('entries')
    .then((entries) => {
      res.json(entries[0]);
    })
    .catch((err) => res.status(400).json('unable to get entries'));
};


module.exports = {
  handleImage,
  handleApiCall
};
