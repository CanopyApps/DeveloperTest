import React from 'react';
import { subscriptionTiers } from './data/subscription_tiers';
import { Card } from './components';
import "./subscribe-canopy-learn.scss";

class SubscribeCanopyLearn extends React.Component {
    constructor(props) {
        super()
    }

    generateCards = () => {
        return subscriptionTiers.map((tier, idx) =>
            <Card
                key={idx}
                data={tier}
            />
        );
    }

    render() {
        return (
            <div className="subscribe-canopy-learn">
                <h1 className="subscribe-canopy-learn__header">Subscribe to Canopy Learn</h1>
                <div className="subscribe-canopy-learn__content">
                    {this.generateCards()}
                </div>
            </div>
        )
    }
}

export default SubscribeCanopyLearn