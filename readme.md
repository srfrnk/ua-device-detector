#ua-device-detector
##

[![Build Status](https://travis-ci.org/srfrnk/ua-device-detector.svg?branch=master)](https://travis-ci.org/srfrnk/ua-device-detector)

### Install
$ bower i ua-device-detector -S

### Server-Side Usage
```javascript
var uaDeviceDetector=require('ua-device-detector');
.
.
.
var deviceInfo=uaDeviceDetector.parseUserAgent(options);
```

### Client-Side Usage
Add script load to HTML:

```html
<script type="text/javascript" src=".../re-tree.js"></script>
<script type="text/javascript" src=".../ua-device-detector.js"></script>
```
Then use in your javascript:
```javascript
var deviceInfo=window.uaDeviceDetector.parseUserAgent(options);
```

To use from angular:

**Don't** - Instead use ng-device-detector :)

### API

parseUserAgent options specification:
- userAgent: (string, required) user agent string to parse
- customDetectors: ([object], optional) array of custom detectors:
    - name: (string, required) name of detector as it will appear in deviceInfo
    - re: (string|regex|reTree expression, required) the expression to use for detecting

parseUserAgent returns a deviceInfo object:
- raw
    - userAgent (string) - raw user agent
    - os (object) - true/false detections per os
    - browser (object) - true/false detections per browser
    - device (object) - true/false detections per device
- os (string) - detected os
- browser (string) - detected browser
- device (string) - detected device
- os_version (string) - detected os version
- browser_version (string) - detected browser version
- isMobile() - returns true if device is mobile. false otherwise
- isTablet() - returns true if device is tablet. false otherwise
- isDesktop() - returns true if device is desktop. false otherwise
- custom (object) - true/false result of detection per custom detector

### Support

Pull-requests with new stuff will be highly appreciated :)

**Please remember to add tests when making changes.**

### License

[MIT License](//github.com/srfrnk/ua-device-detector/blob/master/license.txt)
