import React from 'react';

class RestController extends React.Component {

	constructor(props) {
		super(props);
		this.state = {users: [{"customerId":"1234","accountId":"3456","creditNumber":"34567"}]};
		this.headers = [
			{ key: 'customerId', label: 'Customer ID' },
			{ key: 'accountId', label: 'Account ID' },
			{ key: 'creditNumber', label: 'Credit Card' }
			//{ key: 'body', label: 'Body' }
		];
	}
	
	componentDidMount() {
		fetch("https://ojtd1ovza0.execute-api.us-east-1.amazonaws.com/test/member-products-data-s3/awstest.json",
		{
		 mode: 'no-cors',
		 method: 'GET',
		// x-api-keys:'my8INlNmNI9cRtmu3vIDO33AcJVyiuae3wByZzs9'
		 
		})
		.then(response => {
			console.log(response)
				return response.json();
			}).then(result => {
				this.setState({
					users:result
				});
			});
	}
	render() {                            
		return (
			<table>
				<thead>
					<tr>
					{
						this.headers.map(function(h) {
							return (
								<th key = {h.key}>{h.label}</th>
							)
						})
					}
					</tr>
				</thead>
				<tbody>
					{
						this.state.users.map(function(item, key) {             
						return (
								<tr key = {key}>
								  <td>{item.customerId}</td>
								  <td>{item.accountId}</td>
								  <td>{item.creditNumber}</td>
									  {/* <td>{item.body}</td>*/}
								</tr>
							)
						})
					}
				</tbody>
			</table>
		)
	}
}

export default RestController;