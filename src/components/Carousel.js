import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import github from '../assets/images/github.jpg'
import education from '../assets/images/education.jpg'
import chirag1 from '../assets/images/chirag1.jpg'
import Card from '../components/Card'


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Education Details:',
                    // eslint-disable-next-line
                    subTitle: 'Masters in Computer Science from State University of New York, Albany. Bachelors from \
                    Vidyalankar Institute of Technology, Mumbai in Information Technology',
                    imgSrc: education,
                    link: 'https://www.albany.edu/computer-science',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Work Details:',
                    subTitle: 'Currently working as a Software Developer in Enterprise e-Support Inc.',
                    imgSrc: chirag1,
                    link: 'https://enterpriseesupport.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'GitHub',
                    subTitle: 'All other projects can be found here',
                    imgSrc: github,
                    link: 'https://github.com/chiragcharania',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return (
                <Col>
                    <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
                </Col>
            )

        })
    }
    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;