class StrictGradingStrategy {
    calculateScore(results) {
        // Se houver um único erro, a nota é 0.
        if (results.failed > 0) {
            return 0;
        }
        return 100;
    }
}
module.exports = StrictGradingStrategy;