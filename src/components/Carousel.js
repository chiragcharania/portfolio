import React from 'react';
import { Container, Row } from 'react-bootstrap';

import github from '../assets/images/github.jpg'
import harts from '../assets/images/harts.jpg'
import mindmap from '../assets/images/mindmap.jpg'
import Card from '../components/Card'


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'HaRTS',
                    subTitle: 'Health and Record Tracking System',
                    imgSrc: harts,
                    link: 'https://github.com/chiragcharania/harts-updated',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Mind Map',
                    subTitle: 'Data Visualization in a creative way',
                    imgSrc: mindmap,
                    link: 'https://github.com/chiragcharania/MindMap',
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
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
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