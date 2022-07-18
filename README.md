# CareSuccess TestKit

---

## Manifest Information

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />
<uses-permission android:name="android.permission.USE_BIOMETRIC" />
<uses-permission android:name="android.permission.USE_FINGERPRINT" />
<uses-permission android:name="android.permission.NFC" />

<uses-feature android:name="android.hardware.location.gps" />
<uses-feature android:name="android.hardware.nfc" android:required="false" />

<minimum-sdk version="23" />
<target-sdk version="30" />
<compiled-sdk version="30" />
```

---

## Permissions and Features

- [x] Required
  - [x] Read / Write To External Storage
  - [x] Location - GPS
  - [x] Camera
- [x] Optional
  - [x] NFC
  - [x] Biometric - Fingerprint Minimum
- [ ] Experimental
  - [ ] Local Push Notifications
  - [ ] Remote Push Notifications
  - [ ] Remote Update
  - [ ] BG Location Updates
  - [ ] Geo-Fencing
