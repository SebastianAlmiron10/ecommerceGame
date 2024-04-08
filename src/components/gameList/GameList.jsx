import GameItem from "../gameItem/GameItem";
import PropTypes from 'prop-types';

const GameList = ({ Data, openModal, addCart }) => {


    return(
        <div className="d-flex justify-content-center flex-wrap pt-16">
            {Data.map(game => (
                <GameItem
                    key={game.id}
                    game={game}
                    openModal={openModal}
                    addCart={addCart}
                />
            ))}
        </div>
    )


}


GameList.propTypes = {
    Data: PropTypes.array,
    openModal: PropTypes.bool,
    addCart: PropTypes.func,
};

export default GameList;