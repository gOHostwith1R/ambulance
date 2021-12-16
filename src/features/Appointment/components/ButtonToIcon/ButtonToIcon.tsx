import React from 'react';
import { useWindowSize } from 'react-use';
import PlusBlue from '../../../../assets/svg/plusBlue.svg';
import Plus from '../../../../assets/svg/plus.svg';
import Button from '../../../../components/Button';
import { DICTIONARY } from '../../../../core/consts/dictionary';

const ButtonToIcon = () => {
  const { width } = useWindowSize();
  return (
    width < 1024 ? <img src={PlusBlue} alt="plus" />
      : (
        <Button group="main" color="primary" startIcon={Plus}>
          {DICTIONARY.createAppointment.createAppointment}
        </Button>
      )
  );
};

export default ButtonToIcon;
