const getAll = (req, res) => {
  try {
    const user = req.body
    
    return res.render("index");
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = {
  getAll,
};
