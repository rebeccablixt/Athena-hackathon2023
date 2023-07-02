import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
	return (
		<>
			<div>
				<p>
					This is the home page. The page will include a map showing where there
					are products that can be booked for collection.
				</p>
			</div>
			<img alt='map' src='../../map_pinned.png' />
			<button>
				Select
				<Link to='booking' />
			</button>
		</>
	);
};
