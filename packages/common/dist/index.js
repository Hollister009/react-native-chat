"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var components_1 = require("./components");
exports.App = function () { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(react_native_1.StatusBar, { barStyle: "dark-content" }),
    react_1.default.createElement(react_native_1.SafeAreaView, null,
        react_1.default.createElement(react_native_1.ScrollView, { contentInsetAdjustmentBehavior: "automatic", style: styles.scrollView },
            react_1.default.createElement(components_1.Header, null))))); };
var styles = react_native_1.StyleSheet.create({
    safeAreaView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollView: {
        backgroundColor: components_1.Colors.lighter
    },
});
