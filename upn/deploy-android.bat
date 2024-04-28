@ECHO OFF
REM Create "local.properties" file under "android" folder and add sdk.dir=ANDROID_SDK_ROOT
REM Create "assets" folder under "android/app/src/main/" 

REM npm install -g react-native-cli (This should be done before executing following commands)

REM This creates "index.android.bundle" file under "assets" folder
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

REM Generate APK FIle
REM cd android
REM ./gradlew clean
REM ./gradlew assembleDebug