'use strict';
import * as userManager from "./userManager.js";
import {
    getWallets,
    addWallet,
    Wallet
} from "./walletManager.js";



var app = new Vue({
    el: '#app',
    data: {
        greeting: 'Hi,',
        name: '',
        inputName: '',
        wallets: [],
        newWallet: new Wallet("", "")
    },
    methods: {
        getUser: function () {
            return userManager.getUser();
        },
        setUser: function (name) {
            userManager.setUser(name);
            this.name = name;
            this.wallets = getWallets(name);
        },
        logout: function () {
            userManager.logout();
            this.name = "";
        },
        saveWallet: function () {
            var wallet = new Wallet(this.newWallet.name, this.newWallet.amount);
            addWallet(this.name, wallet);
            this.wallets = getWallets(this.name);
            this.newWallet = new Wallet("", "");
        },
        isUserLogged: function () {
            return this.name != null && this.name != '';
        }
    },
    mounted: function () {
        this.name = this.getUser();
        this.wallets = getWallets(this.name);
    },
    computed: {
        total: function () {
            return this.wallets.reduce((sum, current) => current.amount + sum, 0);
        }
    }
});