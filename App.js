import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Daily from '@daily-co/react-native-daily-js';

export default function App() {
  let call = null;

  if (!call)
  {
    call = Daily.createCallObject();
    call.setLocalVideo(false);
  }

  return (
    <View style={styles.container}>
      <Text>RN Daily</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => {
          call.join({ url: 'https://ruslanaliyev.daily.co/ruslanaliyev_room1', startVideoOff: true });
        }}
        title="Call"
      />
      <Button
        onPress={() => {
          call.leave();//Need await?
          call.destroy();//Need await?
        }}
        title="Hangup"
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
