const index = (req, res) => {
    res.render(`index`, { name: req.user.name });
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