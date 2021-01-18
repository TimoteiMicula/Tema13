import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

const Day = ({ day, list }) => {
	return (
		<div>
			<div>
				<div><strong>{format(new Date(day), 'eeee, dd LLLL')}</strong></div>

				{list.map((item) => {
					return (
						<div>
							<br/>
							<div >{item?.dt_txt}</div>
							<br />																			
							<div> {item?.main.temp} C</div>
								
						
							<hr />
					</div>
					)
				})}
			</div>
			
		</div>
	)
}

Day.propTypes = {
	day: PropTypes.string,
	list: PropTypes.array,
}

export default Day
