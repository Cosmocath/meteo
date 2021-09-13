import React from 'react'

const Form = props => {
    return (
        <div className="container">
            <form onSubmit={props.loadWeather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" className="form-control" name="city" placeholder="Ville" autoComplete="on" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" name="country" autoComplete="on" placeholder="Pays" />
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-warning">Météo !!!</button>
                    </div>

                </div></form>
        </div >
    );

}

export default Form;