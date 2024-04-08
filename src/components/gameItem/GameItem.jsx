import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const GameItem = ({ game, openModal, addCart }) => {

    return (
        <Card style={{ width: "22rem" }} className="m-3">
            <Card.Img
                height={400}
                variant="top"
                src={game.thumbnail}
            />
            <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <div className='w-[300px] h-[100px]  whitespace-nowrap'>
                    <p className='text-ellipsis overflow-hidden'>{game.short_description}</p>
                </div>
                    <span className='absolute -mt-16 text-xl font-bold border-green-500 border-2 px-3 py-1 rounded-full'>${game.id}</span>
                <div>
                    <Button variant="primary" onClick={() => openModal(game)}>
                    More Info
                    </Button>
                    <Button className='mx-3' onClick={() => addCart(game)} variant='warning'>Add to cart</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

GameItem.propTypes = {
    game: PropTypes.array,
    openModal: PropTypes.bool,
    addCart: PropTypes.func,
}

export default GameItem;



