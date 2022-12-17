import PropTypes from 'prop-types';
import {
    FeedbackButton, 
    OptionFeedbackWrapper
} from './Feedback.styled';

export const Feedback = ({ options, onLeaveFeedback}) => {
    return (
        <OptionFeedbackWrapper>
            {options.map((option, idx) => (
                <FeedbackButton
                key={idx}
                type="button"
                onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </FeedbackButton>
            ))}
        </OptionFeedbackWrapper>
    );
};
Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};