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
		fetch("https://abbzayk5ql.execute-api.us-east-1.amazonaws.com/MemberProductAPI_V1/member-products-data-s3/awstest.json",
		{
		 headers : { 
        "Content-Type": "application/json",
		"Method":"GET",
        "X-Api-Key": "my8INlNmNI9cRtmu3vIDO33AcJVyiuae3wByZzs9",
		"Access-Control-Allow-Origin":"allowed_origin",
		"Access-Control-Allow-Methods":"GET,OPTIONS",
		"Access-Control-Allow-Headers":"Content-Type,X-Api-Key"
		}})
		.then(response => {
			console.log(JSON.parse(response))
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