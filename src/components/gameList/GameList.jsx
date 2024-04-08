import GameItem from "../gameItem/GameItem";
import PropTypes from 'prop-types';

const GameList = ({ Data, openModal }) => {


    return(
        <div className="d-flex justify-content-center flex-wrap">
            {Data
            .map(game => (
                <GameItem 
                key = {game.id}
                data = {game}
                
                
            {Data.map(game => (
                <GameItem
                    key={game.id}
                    data={game}
                    openModal={openModal}
                />
            ))}
        </div>
    )


}


GameList.propTypes = {
    Data: PropTypes.array,
    openModal: PropTypes.bool,
};

export default GameList;