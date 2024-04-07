import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const GameItem = ({ data, openModal }) => {

    return (
        <Card style={{ width: "22rem" }} className="m-3">
            <Card.Img
                height={400}
                variant="top"
                src={data.thumbnail}
            />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <div className='w-[300px] h-[100px]  whitespace-nowrap'>
                    <p className='text-ellipsis overflow-hidden'>{data.short_description}</p>
                </div>
                <Button variant="primary" onClick={() => openModal(data)}>
                   More Info
                </Button>
            </Card.Body>
        </Card>
    )
}

GameItem.propTypes = {
    data: PropTypes.array,
    openModal: PropTypes.bool,

}

export default GameItem;



