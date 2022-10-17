import React from 'react';
import CardComponent from '../../components/CardComponent/CardComponent';
import {
  SECOND_MESSAGE,
  ROOM_WITH,
  PENTHOUSE,
} from '../../constants/constants';
import './style.css';
export default function SecondScreen() {
  return (
    <>
      <div className="second-head" id="Second">
        <span className="second-heading">
          <span>Explore</span>
        </span>
      </div>
      <div>
        <div className="second-subhead">{SECOND_MESSAGE}</div>
      </div>
      <div className="card-group">
        <CardComponent
          src="/assets/Explore1.jpg"
          firstBtn={'35$'}
          thirdBtn={'Book!'}
          secondBtn={'28м²'}
          msg={ROOM_WITH}
        />
        <CardComponent
          src="/assets/Explore2.jpg"
          firstBtn={'2039$'}
          secondBtn={'438м²'}
          thirdBtn={'Book!'}
          msg={PENTHOUSE}
        />
      </div>
    </>
  );
}
