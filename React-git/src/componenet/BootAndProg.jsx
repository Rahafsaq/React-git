import React from 'react';

function BootAndProg() {
	return (
		<div className='bootContainer'>
			<div className='bootAndProg'>
				<h1 className='boot-h1'>المعسكرات والبرامج</h1>
				<div className='boot-btn-cont'>
					<button className='boot-btn-purple'>الكبار</button>
					<button className='boot-btn'>الناشئؤن</button>
				</div>
				<div className='filter-img-cont'>
					<img className='filter-img' src='https://tuwaiq.edu.sa/img/filter.svg' alt='' />
				</div>
			</div>
		</div>
	);
}

export default BootAndProg;
