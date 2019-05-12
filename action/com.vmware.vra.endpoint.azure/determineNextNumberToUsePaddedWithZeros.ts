/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function determineNextNumberToUsePaddedWithZeros(namingFormat?: CompositeType(format.string,numberOfDigits.number,lastNumberUsed.number,lowestNumber.number).azureNamingFormat): string {System.debug("determining the next number to use for " + namingFormat.format);

var nextNumberToUse = getNextNumber(namingFormat);
var paddedNumber = padNumberWithZeros(nextNumberToUse, namingFormat.numberOfDigits);

return paddedNumber;

///////////////////////////////  Functions /////////////////////////////////////////////////
function getNextNumber(namingFormat) {
    if (namingFormat.lastNumberUsed != null) {
        System.debug("using lastNumberUsed (" + namingFormat.lastNumberUsed + ")");
        return addToNumber(namingFormat.lastNumberUsed, namingFormat);
    }
    if (namingFormat.lowestNumber != null) {
        System.debug("using lowestNumber (" + namingFormat.lowestNumber + ")");
        return namingFormat.lowestNumber;
    }
    System.debug("using default number 1 as the first number");
    return 1;
}

function addToNumber(currentNumber, namingFormat) {
    var newNumber = currentNumber + 1;
    if (newNumber.toString().length <= namingFormat.numberOfDigits) {
        return newNumber;
    }

    System.warn("Calculated number (" + newNumber + ") is more digits than is allowed (" + namingFormat.numberOfDigits + ").");
    System.warn("Wrapping around to the start of the format, but the numbering options for the format is likely exhausted.");
    if (namingFormat.lowestNumber != null) {
        return namingFormat.lowestNumber;
    }
    return 1;
}

function padNumberWithZeros(numToPad, numberOfDigits) {
    var numToPadLength = numToPad.toString().length;
    if (numToPadLength === numberOfDigits) {
        return numToPad;
    }
    var zerosPadding = new Array(numberOfDigits - numToPadLength + 1).join('0');
    return zerosPadding + numToPad;
}

}
}
