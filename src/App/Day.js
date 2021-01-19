import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

const Day = ({ day, list }) => {
	return (
		<div>
			<div>
			<br/>	<br/>
				<div><strong>{format(new Date(day), 'eeee, dd LLLL')}</strong></div>

				{list.map((item) => {
					return (
						<div>
							<br/>
							<div >{item?.dt_txt}</div>
							<br />																			
							<div class="temp"> Temperatura: {item?.main.temp } C</div>
							<div class="temp"> Temperatura resimțită: {item?.main.feels_like} C</div>
							<div class="temp"> Viteza vantului: {item?.wind.speed} km/h</div>
							<div class="temp" key={item?.weather.description}>Descriere: {item?.weather[0].description} </div>

								
						
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
