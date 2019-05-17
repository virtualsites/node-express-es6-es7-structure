export default {
    async findOne(req, res) {
        return res.status(200).send({ id: req.params.id });
    }
}
