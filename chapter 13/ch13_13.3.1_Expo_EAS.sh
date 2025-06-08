npm install -g eas-cli

eas login
eas init
eas build --platform all
eas update --branch production --message "Fix UI bug"
eas update:rollback --branch production
