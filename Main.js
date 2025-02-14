import App from './App';
import { MyDailyProvider } from './MyDailyProvider';

export default function Main() {
	return (
		<MyDailyProvider>
			<App />
		</MyDailyProvider>
	);
}