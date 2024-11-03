import PropTypes from 'prop-types';
const Trainer = ({user}) => {
    const {name, email, phone} = user;
    return (
        <div className='flex flex-col items-center bg-primary p-4 rounded-2xl bg-opacity-50 text-white space-y-3'>
           <h3 className='text-2xl font-bold'> {name}</h3>
           <p className='italic font-semibold'>{email}</p>
           <span className='italic '>{phone}</span>
        </div>
    );
};


Trainer.propTypes={
    user: PropTypes.object
}


export default Trainer;