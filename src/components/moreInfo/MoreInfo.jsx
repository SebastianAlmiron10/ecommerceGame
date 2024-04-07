import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';


const MoreInfo = ({ Data, showModal, hideModal }) => {

    const hasData = Data && Data.length > 0;
    console.log(Data.title)

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
                        </div>
                    </div>
                </Modal.Body>
           
            <Modal.Footer>
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
