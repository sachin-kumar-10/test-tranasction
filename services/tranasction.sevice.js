const transactionRepository = require('../repository/transaction.repository')
exports.getTransaction = async function({ status, type, currency }) {
    return await transactionRepository.fetchTransaction(status, type, currency)
}