import { Swipeable } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';

function MailItem({ mail, onDelete }) {
  const renderRightActions = () => (
    <RectButton style={styles.deleteButton} onPress={() => onDelete(mail.id)}>
      <Text style={styles.deleteText}>Delete</Text>
    </RectButton>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.item}>
        <Text style={styles.subject}>{mail.subject}</Text>
        <Text style={styles.preview}>{mail.preview}</Text>
      </View>
    </Swipeable>
  );
}