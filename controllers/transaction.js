const transactionService = require('../services/tranasction.sevice')

exports.getTransaction = async function (req, res, next) {
    if(!req.query.status) { // we can use completly reusable and suitable code for validation but adding here in dummy project
        return res.status(400).json({
            success: false,
            message: "Status params is missing"
        })
    }
    const { type, currency } = req.query
    try {
        var data = await transactionService.getTransaction(status, type, currency)
        return res.status(200).json({ status: 200, data: data, message: "Transaction fetched Succesfully" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}