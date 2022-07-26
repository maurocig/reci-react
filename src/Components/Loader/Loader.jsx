import style from './Loader.module.css';

export default function Loader(props) {
	const { loading } = props;
	return (
		<div className={style.container}>
			{loading && <h2>Loading...</h2>}
		</div>
	)
}