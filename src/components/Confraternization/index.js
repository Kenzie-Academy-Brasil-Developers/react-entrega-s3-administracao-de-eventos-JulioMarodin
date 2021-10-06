import { useContext, useState } from 'react';
import { ConfraternizationContext } from '../../Providers/Confraternization';
import { Confra, Title } from './styles';

const Confraternization = () => {
  const { confraternizationList, removeFromConfraternization } = useContext(
    ConfraternizationContext
  );

  return (
    <div>
      <Title>Confraternization drinks list</Title>
      <Confra>
        {confraternizationList.map((item) => (
          <li key={item.id}>
            <img src={item.image_url} alt={item.name} />
            <p>{item.name}</p>
            <p>Brewed since: {item.first_brewed}</p>
            <span>{item.description}</span>
            <span>Quantity: {item.volume.value}</span>
            <button onClick={() => removeFromConfraternization(item)}>
              Remove item
            </button>
          </li>
        ))}
      </Confra>
    </div>
  );
};

export default Confraternization;
