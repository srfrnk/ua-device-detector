/* global describe */
/* global it */
/* global expect */
/* global beforeEach */
/* global module */
/* global inject */

(function () {
    "use strict";

    describe('ua-device-detector client tests', function () {
        describe('loading module in pure JS', function () {
            it('should load into window', function () {
                expect(window.uaDeviceDetector).toBeDefined();
                expect(window.uaDeviceDetector.parseUserAgent).toBeDefined();
                expect(window.uaDeviceDetector.BROWSERS).toBeDefined();
                expect(window.uaDeviceDetector.DEVICES).toBeDefined();
                expect(window.uaDeviceDetector.OS).toBeDefined();
            });
        });

        describe('loading module in angular', function () {
            var uaDeviceDetector;
            beforeEach(function () {
                module("uaDeviceDetector");
                inject(["uaDeviceDetector", function (_uaDeviceDetector) {
                    uaDeviceDetector = _uaDeviceDetector;
                }]);
            });

            it('should have service', function () {
                expect(uaDeviceDetector).toBeDefined();
                expect(uaDeviceDetector.parseUserAgent).toBeDefined();
                expect(uaDeviceDetector.BROWSERS).toBeDefined();
                expect(uaDeviceDetector.DEVICES).toBeDefined();
                expect(uaDeviceDetector.OS).toBeDefined();
            });
        });
    });
})();
