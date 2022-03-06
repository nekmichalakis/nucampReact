import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {

    renderCampsite(campsite) {
        const {image, name, description} = campsite;
        return(
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={image} alt={name} />
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if(comments) {
            return(
                <div className='col-md-5 m-1'>
                    <h4>Comments</h4>
                    {comments.map(c => {
                        const {id, text, author, date} = c;
                        return (
                            <span key={id}>{text}<br/>
                                --{author}, 
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(date)))}<br/><br/>
                            </span>
                        );
                    })}     
                </div>
            );
        }
        return <div/>;
    }

    render() {
        const {campsite} = this.props;
        if(campsite) {
            return (
                <div className='container'>
                    <div className="row">
                        {this.renderCampsite(campsite)}
                        {this.renderComments(campsite.comments)}
                    </div>
                </div>
            );
        }
        return <div/>;
    }
}

export default CampsiteInfo;