var causeType = require('./data/causeType.json');
var occurrence = require('./data/occurrence.json');
var severity = require('./data/severity.json');
var partRisk = require('./data/partRisk.json');
var partRiskColumnDefinition = require('./data/partRiskColumnDefinition.json');


module.exports = function () {
    return {
        CauseType: causeType,
        Occurrence: occurrence,
        Severity:severity,
        PartRisk: partRisk,
        PartRiskColumnDefinition: partRiskColumnDefinition
    }
}