import { SpinnerCircularSplit } from 'spinners-react';
import style from './Loader.module.css';

export default function Loader(props) {
	const { loading } = props;
	return (
		<div className={style.container}>
			{
				loading && <SpinnerCircularSplit color='#0582c5' className={style.spinner} />
			}
		</div>
	)
}