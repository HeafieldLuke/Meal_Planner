const index = (req, res) => {
    res.render(`index`);
};

const community = (req, res) => {
    res.render(`community`);
};

const notFound = (req, res) => {
    res.status(404).render('notFound', {
        page: req.url
    })
}

module.exports = {
    index: index,
    community: community,
    notFound: notFound,
};