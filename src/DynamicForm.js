import React, { useState, Fragment } from "react";

//import "bootstrap/dist/css/bootstrap.css";

const DynamicForm = () => {
	
	const [inputFields, setInputFields] = useState([
    { customerId: '', accountId: '' ,creditCard :''}
  ]);
const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", inputFields);
	/*fetch(' https://abbzayk5ql.execute-api.us-east-1.amazonaws.com/MemberProductAPI_V1/member-products-data-s3/awstest.json', {
			method: 'POST',
			body:  {JSON.stringify(inputFields, null, 2)},
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				return response.json()
			}).then(json => {
				this.setState({
					user:json
				});
			});*/
  };
  
  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "customerId") {
      values[index].customerId = event.target.value;
    } else if (event.target.name === "accountId"){
      values[index].accountId = event.target.value;
    } else{
		 values[index].creditCard = event.target.value;
	}

    setInputFields(values);
  };
  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ customerId: '', accountId: '',creditCard: '' });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  return (
    <>
      <h1>Adding Customer Credit Card Information</h1>
     <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-6">
                <label htmlFor="customerId">Customer ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="customerId"
                  name="customerId"
                  value={inputField.customerId}
				  onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="accountId">Account ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="accountId"
                  name="accountId"
                  value={inputField.accountId}
				  onChange={event => handleInputChange(index, event)}
                />
              </div>
			  <div className="form-group col-sm-4">
                <label htmlFor="creditCard">Credit Card</label>
                <input
                  type="text"
                  className="form-control"
                  id="creditCard"
                  name="creditCard"
                  value={inputField.creditCard}
				  onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-2">
                <button
                  className="btn btn-link"
                  type="button"
				  onClick={() => handleRemoveFields(index)}
                >
                  -
                </button>
                <button
                  className="btn btn-link"
                  type="button"
				  onClick={() => handleAddFields()}
                >
                  +
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onSubmit={handleSubmit}
          >
            Save
          </button>
        </div>
		<br/>
<pre>
 {JSON.stringify(inputFields, null, 2)}
</pre>
      </form>
    </>
  )

}
  

export default DynamicForm;