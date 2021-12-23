import React from 'react';
import {
  CardAvatarDescriptionWrapper, CardBody, CardDate,
  CardHeaderStyled, CardHeaderTitleSubtitle, CardReason, SettingsIconWrapper,
} from '../../../../layouts/Card/Card.styled';
import {
  Avatar, Dropdown, Indicator, Paragraph, Title,
} from '../../../../components';
import SettingsIcon from '../../../../assets/svg/more-vertical.svg';
import TimeIcon from '../../../../assets/svg/clock.svg';
import ListIcon from '../../../../assets/svg/list.svg';
import Card from '../../../../layouts/Card';
import { IndicatorStatusWrapper } from './PatientCard.styled';
import { PatientCardProps } from './type';
import { DropdownItemsStyled } from '../../../../components/Dropdown/Dropdown.styled';
import { DICTIONARY_PATIENT } from '../../DICTIONARY_PATIENT';

const PatientCard: React.FC <PatientCardProps> = ({
  item, patient, dateVisit, handleSetOpenModal,
}) => (
  <Card>
    <CardHeaderStyled>
      <CardAvatarDescriptionWrapper>
        <Avatar variant="card" src={patient.photo} alt="avatar" />
        <CardHeaderTitleSubtitle>
          <Title variant="h3" level={3}>{`${patient.first_name} ${patient.last_name}`}</Title>
          <IndicatorStatusWrapper>
            <Indicator status={item.status} />
            <Paragraph variant="caption" color="#A1ABC9">{`Appointment is ${item.status}`}</Paragraph>
          </IndicatorStatusWrapper>
        </CardHeaderTitleSubtitle>
      </CardAvatarDescriptionWrapper>
      <SettingsIconWrapper>
        <Dropdown image={SettingsIcon} variant="card">
          {DICTIONARY_PATIENT.dropdownSettings.map((elem) => (
            <DropdownItemsStyled
              key={elem}
              variant={elem}
              onClick={() => {
                if (elem === 'Delete') return;
                handleSetOpenModal(elem);
              }}
            >
              {elem}
            </DropdownItemsStyled>
          ))}
        </Dropdown>
      </SettingsIconWrapper>
    </CardHeaderStyled>
    <CardBody>
      <CardDate>
        <img src={TimeIcon} alt="time-icon" />
        <Title variant="h4" level={4}>{dateVisit}</Title>
      </CardDate>
      <CardReason>
        <img src={ListIcon} alt="time-icon" />
        <Paragraph variant="plain-2" font="regular">
          {item.reason}
        </Paragraph>
      </CardReason>
    </CardBody>
  </Card>
);

export default PatientCard;
