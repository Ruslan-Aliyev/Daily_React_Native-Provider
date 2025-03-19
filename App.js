import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useMyDaily } from './MyDailyProvider';

export default function App() {
  const {call}= useMyDaily();

  return (
    <View style={styles.container}>
      <Text>RN Daily</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => {
          call.join({ 
            url: 'https://ruslanaliyev.daily.co/ruslanaliyev_room1', 
            startVideoOff: true, 
          });
        }}
        title="Call"
      />
      <Button
        onPress={async () => {
          await call.leave();
          call.destroy();
        }}
        title="Hangup"
      />

      <Button
        onPress={() => {
          call.setLocalAudio(false);
        }}
        title="Mute"
      />
      <Button
        onPress={() => {
          call.setLocalAudio(true);
        }}
        title="Unmute"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
