import React, {Component} from 'react';
import EditPreviousPlan from '../EditPreviousPlan';
import NewPlan from '../NewPlan';


class PlanData extends Component {
    render() {
        var plandata = this.props.plans.map((plan) => {
            return <EditPreviousPlan
                id={plan.id}
                header={plan.header}
                date={plan.date}
                notes={plan.notes}
                location={plan.location}
                longitude={plan.longitude}
                latitude={plan.latitude}
                participants={plan.participants}
                description={plan.description}
                referencePictures={plan.referencePictures}
                />
        });
        return (
            <div>
                <NewPlan addNew={this.props.addNew}/>
                {plandata}
            </div>
        );
    }
}

export default PlanData;
