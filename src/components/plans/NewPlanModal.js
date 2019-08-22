import React from 'react';
import ReactDOM from 'react-dom';
import NewPlan from './NewPlan';

const NewPlanModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <NewPlan/>
    </React.Fragment>, document.body) : null;

export default NewPlanModal;