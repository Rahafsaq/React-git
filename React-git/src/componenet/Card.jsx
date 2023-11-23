import React from 'react';

function Card(props) {
	return (
		<div className={props.type == 'معسكر' ? 'card' : 'program-card'}>
			<div className='name-container'>
				<p className={props.type == 'معسكر' ? 'type-bootCamp' : 'program'}>{props.type}</p>
				<p className='title'>{props.title}</p>
			</div>
			<div className='city-time-container'>
				<div className='time-container'>
					<img className='icons' src='https://tuwaiq.edu.sa/icons/location_icon.svg' alt='' />{' '}
					<p className='city'>الرياض</p>
				</div>
				<div className='time-container'>
					<img className='icons' src='https://tuwaiq.edu.sa/icons/caleander_icon.svg' alt='' />{' '}
					<p className='city'>10 اسابيع</p>
				</div>
			</div>
			<div className='start-date'>
				<div className='duration'>
					<img src='https://tuwaiq.edu.sa/icons/caleander2_icon.svg' alt='' />
					<p className='date'>يبدأ في {props.startDate}</p>
				</div>

				<button className={props.type == 'معسكر' ? 'card-btn-bootCamp' : 'card-btn-program'}>التفاصيل</button>
			</div>
		</div>
	);
}

export default Card;
