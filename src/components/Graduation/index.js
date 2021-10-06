import { useContext, useState } from 'react';
import { GraduationContext } from '../../Providers/Graduation';
import { Grad, Title } from './styles';

const Graduation = () => {
  const { graduationList, removeFromGraduation } =
    useContext(GraduationContext);

  return (
    <div>
      <Title>Graduation drinks list</Title>
      <Grad>
        {graduationList.map((item) => (
          <li key={item.id}>
            <img src={item.image_url} alt={item.name} />
            <p>{item.name}</p>
            <p>Brewed since: {item.first_brewed}</p>
            <span>{item.description}</span>
            <span>Quantity: {item.volume.value}</span>
            <button onClick={() => removeFromGraduation(item)}>
              Remove item
            </button>
          </li>
        ))}
      </Grad>
    </div>
  );
};

export default Graduation;
