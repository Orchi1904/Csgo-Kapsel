export default async function getExchangeRatesEUR() {
    const response = await fetch(`http://data.fixer.io/api/latest?access_key=${process.env.NEXT_PUBLIC_FIXER_API_KEY}`)
    const exchangeRates = await response.json();
    console.log(exchangeRates);
}