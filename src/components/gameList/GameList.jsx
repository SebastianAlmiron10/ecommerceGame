import GameItem from "../gameItem/GameItem";
import PropTypes from 'prop-types';

const GameList = ({ Data }) => {


    return(
        <div className="d-flex justify-content-center flex-wrap">
            {Data
            .map(game => (
                <GameItem 
                key = {game.id}
                data = {game}
                />
            ))}
        </div>
    )


}


GameList.propTypes = {
    Data: PropTypes.array
};

export default GameList;