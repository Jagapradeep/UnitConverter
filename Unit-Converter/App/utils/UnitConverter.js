import { convert } from "convert";
import baseconvert from "baseconvert";
import currencyConvert from "@y2nk4/currency-converter";

async function UnitConverter(label, value, from, to) {
  if (!value) return 0;
  else if (
    label === "Distance" ||
    label === "Temperature" ||
    label === "Time"
  ) {
    const output = convert(value).from(from.value).to(to.value);
    return output;
  } else if (label === "Number") {
    const output = baseconvert
      .converter(value)
      .fromBase(from.base)
      .toBase(to.base);
    return output;
  } else if (label === "Currency") {
    const converter = new currencyConvert("67dd939b04a2a019f44c");
    const output = await converter.convert(from.value, to.value, Number(value));
    return output;
  }
}

export default UnitConverter;
