import React from 'react';

const Success = ({onRouteChange}) =>{
	return(
		<div>
			<div className = 'white f3'>
				{'your form was submitted'}	
			</div>
			<div>
				<input
				onClick = {() => onRouteChange('Form')}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value= "back"
              />
			</div>
		</div>		
	);
}

export default Success;