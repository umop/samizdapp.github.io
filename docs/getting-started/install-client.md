---
description: >
  Once you're box is running, install the client on your phone or laptop.

sidebar_position: 3
---

# Install Client

Once you're box is up and running, you'll want to set up the client device that
you'll use to access the SamizdApp network. The following options are for the
officially supported browsers/devices; however, other browsers/devices will
likely work as well.

## Chrome/Brave on Desktop

1. Navigate to `chrome://flags/#unsafely-treat-insecure-origin-as-secure` in
   Google Chrome, or `brave://flags/#unsafely-treat-insecure-origin-as-secure`
   in Brave.

2. Set the "Insecure origins treated as secure" flag to "Enabled", and add
   `http://samizdapp.local` to the flag's textbox field.

3. At the bottom of the screen, click Relaunch.

4. Navigate to http://samizdapp.local/pwa. If this URL does not load (you get
   a browser error), it is likely because the box is still updating. Wait 5
   more minutes and try again.

5. If you see a message saying "Install the PWA to continue.", then click on the
   install button in the address bar:

   ![Install button located in the right side of the address bar](/img/install-button.png)

   (If you don't see the install message or the install button, then something
   has gone wrong.)

6. In the popup, select "Install"

You should be redirected to Pleroma.

## Chrome/Brave on Android

1. Install the
   [Android App](https://expo.dev/accounts/samizdapp/projects/tcproxy/builds/27bdc55b-5de1-4fc4-9cd6-6bb4976c9fdb).
2. After installation, open the app.

## Safari on iOS
