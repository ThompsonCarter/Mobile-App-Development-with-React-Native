adb shell am start -W -a android.intent.action.VIEW -d "myapp://notes/note/42" com.myapp
xcrun simctl openurl booted "myapp://notes/note/42"
