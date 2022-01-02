import React from 'react';
import RestoServiceContext from '../resto-service-context';
import RestoServiceComtext from '../resto-service-context/resto-service-context';

const WithRestoService = () => (Wrapped) => {
    return(props)=>{
        return(
            <RestoServiceComtext.Consumer>
                {
                    (RestoService)=>{
                        return <Wrapped {...props} RestoService={RestoService}/>
                    }
                }
            </RestoServiceComtext.Consumer>
        )
    }
};

export default WithRestoService;