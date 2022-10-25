import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    
    const err = useRouteError()
    return (
        <div class="row justify-content-center">
            <div class="col-md-12 col-sm-12">
                <div class="card shadow-lg border-0 rounded-lg mt-5 mx-auto" >
                    <h3 class="card-header display-1 text-muted text-center">
                        Error <span>{err.status}</span>
                    </h3>

                    <span class="card-subtitle mb-2 text-muted text-center">
                        Page you are looking for.. {err.statusText || err.message}
                    </span>

                    <div class="card-body mx-auto">
                        <Link type="button" to='/'
                            class="btn btn-sm btn-info text-white"> Back To Home </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;