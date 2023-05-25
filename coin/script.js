// 코인 실시간 시세 가져오기

const coin1 = document.getElementById("btc_krw");
const coin2 = document.getElementById("eth_krw");
const coin3 = document.getElementById("doge_krw");
const coin4 = document.getElementById("xrp_krw");

const coin_usd1 = document.getElementById("btc_usd");
const coin_usd2 = document.getElementById("eth_usd");
const coin_usd3 = document.getElementById("doge_usd");
const coin_usd4 = document.getElementById("xrp_usd");


function getCoin() {
    fetch("https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH,KRW-DOGE,KRW-XRP")
        .then((response) => response.json())
        .then((json) => {
            const coinPrice1 = parseInt(json[0].trade_price);
            const coinPrice2 = parseInt(json[1].trade_price);
            const coinPrice3 = parseFloat(json[2].trade_price);
            const coinPrice4 = parseFloat(json[3].trade_price);

        coin1.innerText = "￦" + coinPrice1.toLocaleString();
        coin2.innerText = "￦" + coinPrice2.toLocaleString();
        coin3.innerText = "￦" + coinPrice3.toLocaleString();
        coin4.innerText = "￦" + coinPrice4.toLocaleString();

        });
    fetch("https://api.upbit.com/v1/ticker?markets=USDT-BTC,USDT-ETH,USDT-DOGE,USDT-XRP")
        .then((response) => response.json())
        .then((json) => {
            const coinPrice_usd1 = parseInt(json[0].trade_price);
            const coinPrice_usd2 = parseInt(json[1].trade_price);
            const coinPrice_usd3 = parseFloat(json[2].trade_price);
            const coinPrice_usd4 = parseFloat(json[3].trade_price);

            coin_usd1.innerText = "$" + coinPrice_usd1.toLocaleString();
            coin_usd2.innerText = "$" + coinPrice_usd2.toLocaleString();
            coin_usd3.innerText = "$" + coinPrice_usd3.toLocaleString();
            coin_usd4.innerText = "$" + coinPrice_usd4.toLocaleString();

        });
    }


function init() {
    getCoin();
    setInterval(getCoin, 1000);
}

init();
