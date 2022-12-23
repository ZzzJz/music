import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path";
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import postcsspxtoviewport from "postcss-px-to-viewport";
import unocss from "unocss/vite";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [VantResolver()]
        }),
        unocss({
            rules: [
                [/^m-(\d+)$/, function (_a) {
                        var d = _a[1];
                        return ({ 'margin': "".concat(Number(d), "px") });
                    }],
                [/^m-r-(\d+)$/, function (_a) {
                        var d = _a[1];
                        return ({ 'margin-right': "".concat(Number(d), "px") });
                    }],
                [/^m-l-(\d+)$/, function (_a) {
                        var d = _a[1];
                        return ({ 'margin-left': "".concat(Number(d), "px") });
                    }],
                [/^m-t-(\d+)$/, function (_a) {
                        var d = _a[1];
                        return ({ 'margin-top': "".concat(Number(d), "px") });
                    }],
                [/^m-b-(\d+)$/, function (_a) {
                        var d = _a[1];
                        return ({ 'margin-bottom': "".concat(Number(d), "px") });
                    }],
                [/^p-(\d+)$/, function (_a) {
                        var d = _a[1];
                        return ({ 'padding': "".concat(Number(d), "px") });
                    }],
                [/^p-r-(\d+)$/, function (_a) {
                        var d = _a[1];
                        return ({ 'padding-right': "".concat(Number(d), "px") });
                    }],
                [/^p-l-(\d+)$/, function (_a) {
                        var d = _a[1];
                        return ({ 'padding-left': "".concat(Number(d), "px") });
                    }],
                [/^p-t-(\d+)$/, function (_a) {
                        var d = _a[1];
                        return ({ 'padding-top': "".concat(Number(d), "px") });
                    }],
                [/^p-b-(\d+)$/, function (_a) {
                        var d = _a[1];
                        return ({ 'padding-bottom': "".concat(Number(d), "px") });
                    }],
            ]
        })
    ],
    css: {
        postcss: {
            plugins: [
                postcsspxtoviewport({
                    unitToConvert: "px",
                    viewportWidth: 375,
                    unitPrecision: 6,
                    propList: ["*"],
                    viewportUnit: "vw",
                    fontViewportUnit: "vw",
                    selectorBlackList: ["ignore"],
                    minPixelValue: 1,
                    mediaQuery: true,
                    replace: true,
                    exclude: [/^(?!.*node_modules\/vant)/],
                    landscape: false
                }),
                postcsspxtoviewport({
                    unitToConvert: 'px',
                    viewportWidth: 750,
                    unitPrecision: 6,
                    propList: ['*'],
                    viewportUnit: 'vw',
                    fontViewportUnit: 'vw',
                    selectorBlackList: ['ignore-'],
                    minPixelValue: 1,
                    mediaQuery: true,
                    replace: true,
                    exclude: [/node_modules\/vant/i],
                    landscape: false // 是否处理横屏情况
                })
            ]
        }
    },
    resolve: {
        alias: [{
                find: '@', replacement: resolve(__dirname, './src')
            }]
    }
});
