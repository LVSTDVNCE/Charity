import {
	LastEvents,
	Steps,
	Welcome,
	MapOfEvents,
	News,
	HelpTo,
} from '@components/index';

const Home = () => {
	return (
		<>
			<Welcome />
			<Steps />
			<HelpTo />
			<LastEvents />
			<MapOfEvents />
			<News />
		</>
	);
};

export default Home;
