export const ENDPOINTS = {
    BASE: `https://random-data-api.com/api/v2`,
    get BEERS() {
        return `${this.BASE}/beers`
    },
    get CREDITCARD() {
        return `${this.BASE}/credit_cards`
    }
}