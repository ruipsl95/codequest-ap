class PartialGradingStrategy {
    calculateScore(results) {
        const total = results.passed + results.failed;
        if (total === 0) return 0;
        // Regra de três simples para percentagem (0 a 100)
        return Math.round((results.passed / total) * 100);
    }
}
module.exports = PartialGradingStrategy;