const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ShopItem = require('../models/menuItem');

async function _main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/martinsmalts', { });
}

const _showHome = (req, res) => {
    res.render('home', {pageTitle: 'Home'});
}

const _showMenu = async (req, res) => {
    const menuItems = await ShopItem.find({})
    res.render('/menu', { pageTitle: 'Menu', menuItems});
}

exports.showHome = _showHome;
exports.showMenu = _showMenu;
