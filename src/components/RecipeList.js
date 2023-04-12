import { RecipeCard } from './RecipeCard';
import PropTypes from 'prop-types';

export const RecipeList = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <RecipeCard item={item} />
          </li>
        );
      })}
    </ul>
  );
};

RecipeList.propTypes = {
  // масив об'єктів
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
