import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import Card from '../../components/Card';
import videos from '../../json/db.json';
import styles from './Start.module.css';

function Start() {
	return (
		<>
			<Header />
			<Banner image="home" />
			<Title>
				<h1>Um lugar para guardar seus vídeos e filmes!</h1>
			</Title>
			<section className={styles.container}>
				{videos.map((video) => {
					return <Card {...video} key={video.id} />;
				})}
			</section>
			<Footer />
		</>
	);
}

export default Start;
