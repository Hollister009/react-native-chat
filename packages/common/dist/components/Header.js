"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Colors_1 = __importDefault(require("./Colors"));
var Header = function () { return (react_1.default.createElement(react_native_1.ImageBackground, { accessibilityRole: 'image', source: require('./logo.png'), style: styles.background, imageStyle: styles.logo },
    react_1.default.createElement(react_native_1.Text, { style: styles.text }, "Welcome to React"))); };
var styles = react_native_1.StyleSheet.create({
    background: {
        paddingBottom: 40,
        paddingTop: 96,
        paddingHorizontal: 32,
        backgroundColor: Colors_1.default.lighter,
    },
    logo: {
        opacity: 0.2,
        overflow: 'visible',
        resizeMode: 'cover',
        /*
         * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
         *
         * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
         * source image's size.
         */
        marginLeft: -128,
        marginBottom: -192,
    },
    text: {
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center',
        color: Colors_1.default.black,
    },
});
exports.default = Header;
