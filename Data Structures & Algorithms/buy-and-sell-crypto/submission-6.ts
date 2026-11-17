class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let leastPrice = 100;
        let mostPrice = 0;
        let leastPriceIndex, mostPirceIndex;
        let mostProfit = -1,
            profit;

        prices.forEach((price, index) => {
            if (price < leastPrice && index != prices.length - 1) {
                leastPrice = price;
                leastPriceIndex = index;
            }
            if (leastPriceIndex >= mostPirceIndex) {
                mostPrice = 0;
            }
            if (price > mostPrice) {
                mostPrice = price;
                mostPirceIndex = index;
            }

            profit = mostPrice - leastPrice;

            if (profit > mostProfit) mostProfit = profit;
            console.log(mostPrice, leastPrice, profit);
        });

        return profit < 0 ? 0 : mostProfit;
    }
}
