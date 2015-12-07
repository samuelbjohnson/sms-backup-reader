# sms-backup-reader
Displays text messages read from files created by the sms-backup-restore app

## Background

I found myself needing to read (and search) text messages from an older android phone. Extracting the messages was easy enough using the sms-backup-restore app from the app store, but the resulting xml wasn't exactly user-friendly. 

This (very) simple web-app allows you to display the text messages described by an xml file created by the [sms-backup-restore](https://play.google.com/store/apps/details?id=com.riteshsahu.SMSBackupRestore&hl=en) app.

## Setup

The reader depends on jQuery, d3, and underscore. I haven't created an automated build yet, so you'll have to download the javascript files manually and place them in the `lib` directory (check the `index.html` file for the specific filename and directory structure). That's right, this is not yet a user-friendly app.

Place the xml file containing the messages you want read in the `data` directory, and alter the call to `d3.xml()` call in `js/app/main.js` to call the correct file.

Put the entire directory on a webserver (or just open it in a filesystem), and you should be all set.

## Future Work

I do intend to improve both the stability and usability of the app over the next few weeks. At the very least, I want to incorporate better search and filter options to allow you to limit the text messages you actually see. I'd also like to avoid having the xml filename hardcoded, and I may do that by making it a chrome app or firefox add-on.
