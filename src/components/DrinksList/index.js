import { useContext, useState } from 'react';
import { WeddingContext } from '../../Providers/Wedding';
import { ConfraternizationContext } from '../../Providers/Confraternization';
import { GraduationContext } from '../../Providers/Graduation';
import { DrinkContext } from '../../Providers/Drinks';
import { DrinkContainer, Title } from './styles';

const DrinkList = () => {
  const { drinks } = useContext(DrinkContext);
  const { addToWedding } = useContext(WeddingContext);
  const { addToGraduation } = useContext(GraduationContext);
  const { addToConfraternization } = useContext(ConfraternizationContext);

  return (
    <DrinkContainer>
      <Title>Drinks available for your party!</Title>
      <ul>
        {drinks.map((item) => (
          <li key={item.id}>
            <img src={item.image_url} alt={item.name} />
            <p>{item.name}</p>
            <p>Brewed since: {item.first_brewed}</p>
            <span>{item.description}</span>
            <span>Quantity: {item.volume.value}</span>
            <button onClick={() => addToWedding(item)}>Add to Wedding</button>
            <button onClick={() => addToGraduation(item)}>
              Add to Graduation
            </button>
            <button onClick={() => addToConfraternization(item)}>
              Add to Confraternization
            </button>
          </li>
        ))}
      </ul>
    </DrinkContainer>
  );
};

export default DrinkList;
