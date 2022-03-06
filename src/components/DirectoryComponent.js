import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Directory extends Component {
   
    render() {
        const directory = this.props.campsites.map(campsite => {
            const{id, image, name} = campsite;
            return (
                <div key={id} className='col-md-5 m-1'>
                    <Card onClick={() => this.props.onClick(campsite.id)}>
                        <CardImg width="100%" src={image} alt={name} />
                        <CardImgOverlay>
                            <CardTitle>{name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;