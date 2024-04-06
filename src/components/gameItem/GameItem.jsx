import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const GameItem = ({ data }) => {

    
    return (
        <Card style={{ width: "22rem" }} className="m-3">
            <Card.Img
                height={400}
                variant="top"
                src={data.thumbnail}
            />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <p className='text-ellipsis'>{data.short_description}</p>
                <a href={data.game_url}>
                    <Button>More Info</Button>
                </a>
            </Card.Body>
        </Card>    
    )
}

GameItem.propTypes = {
    data: PropTypes.array

}

export default GameItem;



