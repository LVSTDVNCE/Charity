import {
	DonateTo,
	LastEvents,
	Steps,
	Welcome,
	MapOfEvents,
	News,
} from '@components/index';

const Home = () => {
	return (
		<>
			<Welcome />
			<Steps />
			<DonateTo />
			<LastEvents />
			<MapOfEvents />
			<News />
		</>
	);
};

export default Home;
