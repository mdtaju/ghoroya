import React from 'react';
import styles from '../styles/Slider.module.scss';

const SliderSelect = () => {
      return (
            <div className={styles.home_slider_select_section}>
                  <select className="nice-select Advice" style={{display:'none'}}>
                              <option>Choose a Restaurant</option>
                              <option>Choose a Restaurant 1</option>
                              <option>Choose a Restaurant 2</option>
                              <option>Choose a Restaurant 3</option>
                              <option>Choose a Restaurant 4</option>
                  </select>
                  <div className="nice-select Advice">
                        <span>Chose a Restaurant</span>
                        <ul className="list">
                              <li data-value="Choose a Restaurant" className="option selected focus">Choose a Restaurant</li>
                              <li data-value="Choose a Restaurant 1" className="option">Choose a Restaurant 1</li>
                              <li data-value="Choose a Restaurant 2" className="option">Choose a Restaurant 2</li>
                              <li data-value="Choose a Restaurant 3" className="option">Choose a Restaurant 3</li>
                              <li data-value="Choose a Restaurant 4" className="option">Choose a Restaurant 4</li>
                        </ul>
                  </div>
            </div>
      );
};

export default SliderSelect;