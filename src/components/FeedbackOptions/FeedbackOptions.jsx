import PropTypes from 'prop-types';
import { WrapperControls, Title, Button,ButtonWrapper } from 'components/FeedbackOptions/FeedbackOptions.styled';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
     return (
     <WrapperControls>
        <Title>Please leave feedback</Title>
        <ButtonWrapper>
          {options.map(option => { return (<Button key={options.indexOf(option)} type="button" onClick={onLeaveFeedback}>{option}</Button>)})}
        </ButtonWrapper>
      </WrapperControls>)
}


FeedbackOptions.prototype = {
  options: PropTypes.PropTypes.arrayOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
}