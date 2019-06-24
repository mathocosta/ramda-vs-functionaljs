/**
 * Funções para serem utilizadas nas execuções dos métodos.
 */

// Filter
const filterable = user => user.gender === 'Male'

// Find
const wanted = user => user.credit_card_type === 'visa'

// Map
const iterable = user =>
    Object.assign(user, { first_name: user.first_name.toUpperCase() })

// Reduce
const reducer = (accumulator, currentUser) =>
    accumulator + (currentUser.gender === 'Male' ? 1 : 0)

module.exports = {
    filterable,
    wanted,
    iterable,
    reducer
}
