import PropTypes from 'prop-types';

export const RecipeCard = ({
  item: { image, name, servings, calories, time },
}) => {
  return (
    <div>
      <img src={image} alt={name} width="240" />
      <h2>{name}</h2>
      <div>
        <div>
          <span>Icon</span>
          <p>{time} time</p>
        </div>
        <div>
          <span>Icon</span>
          <p>{servings} servings</p>
        </div>
        <div>
          <span>Icon</span>
          <p>{calories} calories</p>
        </div>
      </div>
      <h3>Difficalty</h3>
      <div>
        <span>Easy</span>
        <span>Medium</span>
        <span>Hard</span>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
};
