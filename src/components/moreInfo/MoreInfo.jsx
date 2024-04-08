import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';


const MoreInfo = ({ Data, showModal, hideModal }) => {

    return (
        <Modal
            show={showModal}
            onHide={hideModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {Data.title}
                </Modal.Title>
            </Modal.Header>
            
                <Modal.Body>
                    <div className='flex justify-center flex-row'>
                        <img src={Data.thumbnail} alt="" className='w-full object-cover' />
                        <div className='p-4'>
                            <p className='text-xl '>
                                {Data.short_description}
                            </p>
                            <span className='inline-flex bg-green-800 p-2 rounded-xl text-white font-bold'>
                                {Data.genre}
                            </span>
                            <span className='ml-8 text-xl font-bold border-green-500 border-2 px-3 py-1 rounded-full'>${Data.id}</span>

                        </div>
                    </div>
                </Modal.Body>
           
            <Modal.Footer>
                <a href={Data.game_url} target='_blank'>
                    <Button>Official page</Button>
                </a>
                <Button onClick={hideModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};


MoreInfo.propTypes = {
    Data: PropTypes.array,
    showModal: PropTypes.bool,
    hideModal: PropTypes.func,
};


export default MoreInfo;
