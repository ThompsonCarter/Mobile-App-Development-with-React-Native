# ios/fastlane/Fastfile
default_platform(:ios)
platform :ios do
  desc "Sync certificates and profiles"
  lane :sync_signing do
    match(type: "appstore")    # for App Store
    match(type: "development") # for local builds
  end
end
