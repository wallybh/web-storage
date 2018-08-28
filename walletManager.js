//Example of using localStorage with complex objects

export class Wallet {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
        this.createTime = new Date();
    }
}

export function getWallets(user) {
    let walletsStr = localStorage.getItem(`wallets.${user}`);

    if (walletsStr)
        return JSON.parse(walletsStr);
    else
        return [];
}

export function addWallet(user, wallet) {
    let wallets = getWallets(user);

    wallets.push(wallet);

    setWallets(user, wallets);
}

export function deleteWallet(wallet) {
    
}

function setWallets(user, wallets) {
    localStorage.setItem(`wallets.${user}`, JSON.stringify(wallets));
}