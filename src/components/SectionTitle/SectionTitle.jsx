import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='flex justify-center my-8'>
            <div className='md:w-3/12 text-center'>
                <p className='text-yellow-600 mb-2'>---{subHeading}---</p>
                <h3 className='text-3xl uppercase font-medium py-4  border-y-4'>{heading}</h3>
            </div>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
}

export default SectionTitle;