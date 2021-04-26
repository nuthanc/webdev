const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db('users')
    .where({ id })
    .then((user) => {
      if (user.length) res.json(user[0]);
      else res.status(400).json('Not found');
    })
    .catch((err) => res.status(400).send('error getting user'));
};

module.exports = {
  handleProfileGet,
};
