# android/fastlane/Fastfile
default_platform(:android)
platform :android do
  desc "Generate or fetch keystore"
  lane :sync_keystore do
    download_from_play_store(
      json_key: "play-store-service-account.json",
      package_name: "com.yourapp",
      export_to: "android/app/yourapp.keystore"
    )
  end

  desc "Build and sign Android APK"
  lane :build_release do
    gradle(
      task: "assemble",
      build_type: "Release",
      properties: {
        "android.injected.signing.store.file" => "android/app/yourapp.keystore",
        "android.injected.signing.store.password" => ENV["KEYSTORE_PASSWORD"],
        "android.injected.signing.key.alias" => ENV["KEY_ALIAS"],
        "android.injected.signing.key.password" => ENV["KEY_PASSWORD"]
      }
    )
  end
end
